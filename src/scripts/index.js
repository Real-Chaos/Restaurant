// Imports -------------------------------------------------------------------------------------------------------------------------------------------------------

import '../assets/css/styles.css';
import logo from '../assets/images/logo.png';
import homeHero from '../assets/images/homeHero.jpg';
import aboutUsBg from '../assets/images/aboutUsBackground.jpg';

import aboutUsImg1 from '../assets/images/aboutUsImg1.jpg';
import aboutUsImg2 from '../assets/images/aboutUsImg2.jpg';
import specialMenu from '../assets/images/specialMenu.jpg';
import burger from '../assets/images/burger.jpeg';

import pizza from '../assets/images/pizza.jpg';
import wings from '../assets/images/wings.jpg'
import tender from '../assets/images/tenders.jpg'

import nuggets from '../assets/images/nuggets.jpg';
import newsletter from '../assets/images/newsletter.jpg';
import menu from '../assets/images/menu.jpg'
import footer from '../assets/images/footerBackground.jpg';

import team from '../assets/images/team.jpg';
import reserve from '../assets/images/reservation.jpg';
// import chef1 from '../assets/images/chef1.jpg'
import favicon from '../assets/images/favicon.png'

import {appendNavHero, appendNavUl, appendHeroText, appendAbout, contentAppend, appendMenu, appendTeam, handleNav} from './load.js'


export default logo
export {aboutUsImg1, aboutUsImg2}
export {pizza, burger, nuggets, tender, wings}

appendNavHero()
appendNavUl()
appendHeroText()
appendAbout()
contentAppend()
appendMenu()
appendTeam()
handleNav()

// const nav = () => {
//     const home = document.querySelector('.home')
//     const about = document.querySelector('.about')
//     const menu = document.querySelector('.mnu')
//     const team = document.querySelector('.tem')
//     const reservations = document.querySelector('.reserve')
    
//     home.addEventListener('click', ()=> {
//         appendAbout().style.display = 'none'
//     })
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// Exports ---------------------------------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
