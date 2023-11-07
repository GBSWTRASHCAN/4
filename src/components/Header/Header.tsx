import styles from "components/Header/Header.module.css";
import LetterIco from "img/letter-svgrepo-com (1).svg";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className={styles.inner}>
        <div className={styles.head_container}>
          <div className={styles.head_brand}>마음의 편지</div>
          <img src={LetterIco}/>
          <div className={styles.login_signup}>
            <div className={styles.login}>
              <a href="">로그인</a>
            </div>
            <div className={styles.signup}>
              <a href="">회원가입</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header