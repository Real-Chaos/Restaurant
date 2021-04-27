import {navHero, navUl, heroText} from './header.js'
import {about, aboutImg} from './about.js'
import menu from './menu.js'
import specialMenu from './specialmenu.js'
import Team from './team.js'
import chef1 from '../assets/images/chef1.jpg'
import chefImg2 from '../assets/images/chefImg2.jpg'
import chefImg3 from '../assets/images/chefImg3.jpg'

const content = document.querySelector('#content')

const contentAppend = () => {
    content.appendChild(appendNavHero());
    content.appendChild(appendAbout())
    content.appendChild(appendMenu())
    content.appendChild(specialMenu.specialMenu())
    content.appendChild(appendTeam())
}

const appendNavHero = () => {
    const navHeroDiv = navHero.navHeroDiv()
    const navBar = navHero.navBar()
    const navElement = navHero.navElement()
    const logoImg = navHero.logoImg()
    
    navElement.appendChild(logoImg)
    navElement.appendChild(appendNavUl())
    navBar.appendChild(navElement);
    navHeroDiv.appendChild(navBar);
    navHeroDiv.appendChild(appendHeroText())
    return navHeroDiv
}



const appendNavUl = () => {
    
    const navbarUl = navUl.navbarUl()
    const home = navUl.navLiHome();
    const about = navUl.navLiAbout();
    const menu = navUl.navLiMenu()
    const team = navUl.navLiTeam()
    const reservations = navUl.navLiReservations()

    navbarUl.appendChild(home)
    navbarUl.appendChild(about)
    navbarUl.appendChild(menu)
    navbarUl.appendChild(team)
    navbarUl.appendChild(reservations)
    return navbarUl

}

const appendHeroText = () => {
    const text = heroText.text();
    const heroH1 = heroText.heroTextH1();
    const heroH4 = heroText.heroTextH4();
    const heroP = heroText.heroTextP();
    const button = heroText.heroTextButton();

    text.appendChild(heroH1)
    text.appendChild(heroH4)
    text.appendChild(heroP)
    text.appendChild(button)
    return text
}

const appendAbout = () => {
    const aboutUsOne = about.aboutUsOne();
    const aboutUsText = about.aboutUsText();
    const h1 = about.h1();
    const h6 = about.h6();
    const p1 = about.p1();
    const p2 = about.p2();
    const p3 = about.p3();
    const aboutUsImg = aboutImg.aboutUsImg()
    const img1 = aboutImg.img1()
    const img2 = aboutImg.img2()

    aboutUsOne.appendChild(aboutUsText)
    aboutUsOne.appendChild(aboutUsImg)
    aboutUsImg.appendChild(img1)
    aboutUsImg.appendChild(img2)
    aboutUsText.appendChild(h1)
    aboutUsText.appendChild(h6)
    aboutUsText.appendChild(p1)
    aboutUsText.appendChild(p2)
    aboutUsText.appendChild(p3)
    return aboutUsOne
    
}

const appendMenu = () => {
    const menuDiv = menu.menu()
    const h1 = menu.h1()
    const p = menu.p()
    const menuTabs = menu.menuTabs()
    const starters = menu.starters()
    const mainDish = menu.mainDish()
    const desserts = menu.desserts()
    const drinks = menu.drinks()

    menuDiv.appendChild(h1)
    menuDiv.appendChild(p)
    menuDiv.appendChild(menuTabs)
    menuTabs.appendChild(starters)
    menuTabs.appendChild(mainDish)
    menuTabs.appendChild(desserts)
    menuTabs.appendChild(drinks)

    return menuDiv
}

const appendTeam = () => {
    const chef = new Team(chef1, 'John Doggot');
    const chef2 = new Team(chefImg2, 'Jeffrey Spender')
    const chef3 = new Team(chefImg3, 'Monica Reyes')
    const team = chef.team()
    
    const chefs = chef.chef()
    const chefInfo = chef.chefInfo()
    const chefIcons = chef.chefIcons()

    const chefInfo2 = chef2.chefInfo()
    const chefIcons2 = chef2.chefIcons()

    const chefInfo3 = chef3.chefInfo()
    const chefIcons3 = chef3.chefIcons()

    team.appendChild(chefs)
    chefs.appendChild(chefInfo)
    chefInfo.appendChild(chefIcons)

    chefs.appendChild(chefInfo2)
    chefInfo2.appendChild(chefIcons2)

    chefs.appendChild(chefInfo3)
    chefInfo3.appendChild(chefIcons3)

    return team
}

function handleNav() {
    const home = document.querySelector('.home')
    const about = document.querySelector('.about')
    const mnu = document.querySelector('.mnu')
    const tem = document.querySelector('.tem')
    const res = document.querySelector('.res')
    home.style.color = '#e75b1e'
    
    const aboutUsOne = document.querySelector('.aboutUsOne')
    const menu = document.querySelector('.menu')
    const specialMenu = document.querySelector('.specialMenu')
    const team = document.querySelector('.team')


    about.addEventListener('click', ()=> {
        aboutUsOne.style.display = 'grid';
        about.style.color = '#e75b1e';
        mnu.style.color = 'white'
        tem.style.color = 'white'
        home.style.color = 'white'
        menu.style.display = 'none';
        specialMenu.style.display = 'none';
        team.style.display = 'none';

        res.style.color = 'white'
    });

    mnu.addEventListener('click', ()=> {
        menu.style.display = 'grid';
        mnu.style.color = '#e75b1e';
        about.style.color = 'white'
        tem.style.color = 'white'
        home.style.color = 'white'
        aboutUsOne.style.display = 'none';
        specialMenu.style.display = 'block';
        team.style.display = 'none';
        res.style.color = 'white'
    });

    tem.addEventListener('click', ()=> {
        team.style.display = 'grid';
        tem.style.color = '#e75b1e';
        about.style.color = 'white'
        mnu.style.color = 'white'
        home.style.color = 'white'
        menu.style.display = 'none';
        specialMenu.style.display = 'none';
        aboutUsOne.style.display = 'none';
        res.style.color = 'white'
    });

    res.addEventListener('click', ()=> {

        res.style.color = '#e75b1e';
        mnu.style.color = 'white'
        tem.style.color = 'white'
        home.style.color = 'white'
        aboutUsOne.style.color = 'white'
        menu.style.display = 'none';
        specialMenu.style.display = 'none';
        team.style.display = 'none';
        aboutUsOne.style.display = 'none';
        res.style.color = '#e75b1e'
    });

    home.addEventListener('click', ()=> {
        aboutUsOne.style.display = 'grid';
        home.style.color = '#e75b1e'
        about.style.color = 'white';
        mnu.style.color = 'white'
        tem.style.color = 'white'
        menu.style.display = 'block';
        specialMenu.style.display = 'block';
        team.style.display = 'block';

        res.style.color = 'white'
    });
}

export {contentAppend, appendNavHero, appendNavUl, appendHeroText, appendAbout, appendMenu, appendTeam, handleNav}
