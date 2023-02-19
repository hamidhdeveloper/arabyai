import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../pages/signup/SignUpModel.css";
import SignUpModel from "../pages/signup/SignUpModel";
import { useTranslation  } from "react-i18next";

import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [isArabic, setIsArabic] = useState(true);
  const currentLanguage= localStorage.getItem('lang') ;


  useEffect(()=>{

    const currentLanguage= localStorage.getItem('lang') ;
    // console.log("Loading Header",currentLanguage);
    i18n.changeLanguage(currentLanguage)
    // if(currentLanguage==='en'){
    //   document.body.dir= 'ltr'
    // }else{
      
    //   document.body.dir= 'rtl'
      
    // }
    
    //  
    // document.body.dir= 'rtl'
    

  },[currentLanguage])


  const changeLang =(l)=>{
    return ()=>{

      setIsArabic(!isArabic);
      // console.log("is arabic value at header "+isArabic);

      // alert(l)
      i18n.changeLanguage(l)

      //Now set the current language in local storage
      localStorage.setItem('lang',l);
      

    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    
    <header className="header">
      <div className="header-left">
        <img
          src="../assets/images/Araby.ai logo.svg"
          className="logo"
          alt="logo main"
        />
      </div>
      <div className="header-right">
        <Link to="login">{t('Login')} </Link>
        <Link to="login">
          <img src="../assets/images/Login.svg" alt="img" />
        </Link>
        <button onClick={toggleModal}>{t('Sign Up')} </button>
        {isArabic ? (
        <span onClick={changeLang('ar')} >ع</span>
        ) : (
        <span onClick={changeLang('en')} >EN</span>
        )}
      </div>
      <SignUpModel modal={modal} toggleModal={toggleModal} />
    </header>
  );
};

export default Header;

