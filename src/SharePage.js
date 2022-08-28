import React from 'react'
import {BiRepost, BiSearch} from 'react-icons/bi'
import {BsPlusCircleDotted, BsWhatsapp,  BsFlag} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import './SharePage.css'

function SharePage({setShare}) {
  return (
    <div className="sharePage">

      <div className='sharePage__content'>
        <div >
          <div className="sharePage__top">
            <div className="sharePage__to">
              <h3>Send to</h3>
            </div>
            <div className="sharePage__close">
              <GrFormClose onClick={()=> setShare(false)} />
            </div>
          </div>
          <div className="sharePage__people">
            <div className="sharePage__repost">
              <div className="sharePage__repost__icon">
                <BiRepost />
              </div>
              <div className="sharePage__person__name">
                <p>Repost</p>
              </div>
            </div>

            <div className="sharePage__person">
              <img
                className="sharePage__person__img"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt=""
              />
              <div className="sharePage__person__name">
                <p>Patsy Olson</p>
              </div>
            </div>

            <div className="sharePage__more">
              <div className="sharePage__more__icon">
                <BiSearch />
              </div>
              <div className="sharePage__person__name">
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="sharePage__ways">
            <div className="sharePage__way__instaStory">
              <div className="sharePage__way__icon">
                <BsPlusCircleDotted />
              </div>
              <div className="sharePage__person__name">
                <p>Stories</p>
              </div>
            </div>
            <div className="sharePage__way__wp">
              <div className="sharePage__way__icon">
                <BsWhatsapp />
              </div>
              <div className="sharePage__person__name">
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="sharePage__options">
            <div className="sharePage__option">
              <div className="sharePage__option__icon">
                <BsFlag />
              </div>
              <div className="sharePage__person__name">
                <p>Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePage