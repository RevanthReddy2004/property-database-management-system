import React from 'react'
import Footer from '../components/footer';
import Gowithapp from '../components/Gowithapp';



import style from "../styles/Home.module.css";

export default function Home() {



  return (
    <div className={style.home}>

      <div className={style.home_big_img_div}>
      <img src="https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="" alt="" />
         </div>
      <Gowithapp />
      <Footer />
    </div>
  )
}

