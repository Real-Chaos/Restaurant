import logo from './index.js';

const navHero = (() => { 
    const navHeroDiv = () => {
        const navHeroDiv = document.createElement('div');
        navHeroDiv.classList.add('nav-hero');
        return navHeroDiv
    }
    const navBar = () => {
        const navbar = document.createElement('div');
        navbar.classList.add('nav')
        return navbar
    }
    const navElement = () => {
        const navElement = document.createElement('nav');
        return navElement
    }
    const logoImg = () => {
        const logoImg = document.createElement('img');
        logoImg.src = `${logo}`;
        return logoImg
    }

    return {
        navHeroDiv,
        navBar,
        navElement,
        logoImg
    }

})();

const navUl = (() => {
    const navbarUl = () => { 
        const ul = document.createElement('ul');
        return ul
    }
    const navLiHome = () => {
        const home = document.createElement('li')
        home.textContent = 'Home';
        home.classList.add('home')
        return home
    }
    const navLiAbout = () => {
        const about = document.createElement('li')
        about.textContent = 'About Us';
        about.classList.add('about')
        return about
    }
    const navLiMenu = () => {
        const menu = document.createElement('li')
        menu.textContent = 'Menu';
        menu.classList.add('mnu')
        return menu
    }
    const navLiTeam = () => {
        const team = document.createElement('li')
        team.textContent = 'Team';
        team.classList.add('tem')
        return team
    }
    const navLiReservations = () => {
        const reservations = document.createElement('li')
        reservations.textContent = 'Reservations';
        reservations.classList.add('res')
        return reservations
    }
    
    return {
        navbarUl,
        navLiHome,
        navLiAbout,
        navLiMenu,
        navLiTeam,
        navLiReservations
    }
})();

const heroText = (() => {
    const text = () => {
        const text = document.createElement('div')
        text.classList.add('heroText');
        return text
    }
    const heroTextH1 = () => {
        let type = document.createElement('h1');
        let typewriter = new Typewriter(type, {
            loop: true
        })

        typewriter.typeString('Dinner with us')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Bring your <span class="typer"> family</span>')
            .pauseFor(2300)
            .deleteChars(6)
            .typeString('<span class="typer"> friends</span>')
            .pauseFor(2300)
            .deleteChars(7)
            .typeString('<span class="typer"> Pets</span>')
            .pauseFor(2300)
            .start()
        return type
    }
    const heroTextH4 = () => {
        const heroTextH4 = document.createElement('h4')
        heroTextH4.textContent = 'Accidental Appearence';
        return heroTextH4
    }
    const heroTextP = () => {
        const heroTextP = document.createElement('p')
        heroTextP.textContent = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod';
        return heroTextP
    }
    const heroTextButton = () => {
        const button = document.createElement('button')
        button.textContent = 'Book My Table';
        button.classList.add('book-table');
        return button
    }

    return {
        text,
        heroTextH1,
        heroTextH4,
        heroTextP,
        heroTextButton
    }
})();

export {navHero, navUl, heroText}


