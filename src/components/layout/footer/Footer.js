import React from 'react'
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_content}>
        <span> &#169; Trilokn infotech pvt. ltd</span>
      </div>
    </div>
  )
}

export default Footer