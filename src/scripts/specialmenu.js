import {pizza, burger, nuggets, tender, wings} from './index.js'

const specialMenu = (() => {
    const specialMenu = () => {
        const specialMenu = document.createElement('div');
        specialMenu.classList.add('specialMenu')
        const h1 = document.createElement('h1')
        h1.textContent = 'Todays Special'
        const p = document.createElement('p')
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco.'
        const specialMenuImg = document.createElement('div')
        specialMenuImg.classList.add('specialMenuImg')
        const pizzaImg = document.createElement('img')
        pizzaImg.src = pizza
        const burgerImg = document.createElement('img')
        burgerImg.src = burger
        const nuggetsImg = document.createElement('img')
        nuggetsImg.src = nuggets
        const tenderImg = document.createElement('img')
        tenderImg.src = tender
        const wingsImg = document.createElement('img')
        wingsImg.src = wings

        specialMenu.appendChild(h1)
        specialMenu.appendChild(p)
        specialMenu.appendChild(specialMenuImg)
        specialMenuImg.appendChild(pizzaImg)
        specialMenuImg.appendChild(burgerImg)
        specialMenuImg.appendChild(nuggetsImg)
        specialMenuImg.appendChild(tenderImg)
        specialMenuImg.appendChild(wingsImg)
        return specialMenu
    }
    return {
        specialMenu
    }
})()

export default specialMenu