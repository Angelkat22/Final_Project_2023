import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import styles from './ModalWindow.module.css'
import Button from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';

function ModalWindow({modalActive, setModalActive, cong_text, follow_text}) {
  return (
    <div onClick={() => setModalActive(false)} className={`${styles.modal} ${modalActive && styles.active}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${styles.modal_window} ${modalActive && styles.active}`}>
        <div className={styles.info_box}>
          <AiOutlineCloseCircle className={styles.close_btn} 
                                onClick={() => {
                                setModalActive(false);
                                document.body.style.overflow = '';
          }} />
          <p>{cong_text}</p>
          <p>{follow_text}</p>
          {/* <NavLink to='/'> 
            <Button text={'Continue shopping'} 
                    defined_style={'header_btn'} 
                    onClick={() => {
                    setModalActive(false);
                    document.body.style.overflow = '';
                    }
            } />
          </NavLink> */}
        </div>
      </div>
    </div>
  )
}

export default ModalWindow