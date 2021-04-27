import {aboutUsImg1, aboutUsImg2} from './index.js'

const about = (() => {
    const aboutUsOne = () => {
        const aboutUsOne = document.createElement('div');
        aboutUsOne.classList.add('aboutUsOne')
        return aboutUsOne
    }

    const aboutUsText = () => {
        const aboutUsText = document.createElement('div')
        aboutUsText.classList.add('aboutUsText')
        return aboutUsText
    }

    const h1 = () => {
        const h1 = document.createElement('h1');
        h1.textContent = 'About Us'
        return h1
    }

    const h6 = () => {
        const h6 = document.createElement('h6')
        h6.textContent = 'IT STARTED, QUITE SIMPLE, LIKE THIS...'
        return h6
    }

    const p1 = () => {
        const p1 = document.createElement('p')
        p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.';
        return p1
    }

    const p2 = () => {
        const p2 = document.createElement('p')
        p2.textContent = 'Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros.'
        return p2;
    }

    const p3 = () => {
        const p3 = document.createElement('p')
        p3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.';
        return p3
    }

    return {
        aboutUsOne,
        aboutUsText,
        h1,
        h6,
        p1,
        p2,
        p3
    }
})();

const aboutImg = (() => {
    const aboutUsImg = () => {
        const aboutUsImg = document.createElement('div')
        aboutUsImg.classList.add('aboutUsImg')
        return aboutUsImg
        
    }
    const img1 = () => {
        const img1 = document.createElement('img')
        img1.src = aboutUsImg1
        return img1
    }

    const img2 = ()=> {
        const img2 = document.createElement('img');
        img2.src = aboutUsImg2
        return img2
    }

    return {
        aboutUsImg,
        img1,
        img2
    }
})()

export {about, aboutImg}