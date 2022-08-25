import React, {useState, useEffect} from 'react'
import db from './firebase';
import firebase from 'firebase/compat/app';
import './VideoSidebar.css';

/* değişiklik olduysa
followed ise
doc.data çoğalt
array'e username ekle
çoğaltılmış array'i set et
firebase'i update et
*/
function ProfilePic({profilepic, username}) {




    const [followed, setFollowed] = useState( null)


   useEffect(() => {
    db.collection('users').doc('currentuser').onSnapshot(doc => {
        setFollowed(doc.data().follows.includes(username) || null)
    })
  
   
   }, [followed])
   


    



    const followFunc = async ()=>  {
        if(followed === null){
            setFollowed(true)
            db.collection('users').doc('currentuser').update({
                follows: firebase.firestore.FieldValue.arrayUnion(username)
            })

        }
        else{
            setFollowed( follow => !followed)
           if(!followed){
                db.collection('users').doc('currentuser').update({
                     follows: firebase.firestore.FieldValue.arrayUnion(username)
                })

           }
           else{
                db.collection('users').doc('currentuser').update({
                 follows: firebase.firestore.FieldValue.arrayRemove(username)
                })
           }

    }}
  return (
    <div >

        <div onClick={followFunc } className={`videoSidebar__button__follow ${followed && 'following'}`}>
            +
        </div>
        <img  src={profilepic} alt="" className='videoSidebar__button__img' />

    </div>
  )
}

export default ProfilePic