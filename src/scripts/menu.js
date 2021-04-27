const menu = (() => {

    const menu = ()=> {
        const menu = document.createElement('div')
        menu.classList.add('menu')
        return menu
    }
    const h1 = () => {
        const h1 = document.createElement('h1')
        h1.textContent = 'Our Menu'
        return h1
    }

    const p = () => {
        const p = document.createElement('p')
        p.textContent = 'There are 2 monkeys named john and john the second. John the second is john the second while john is john. One day John and John the second got in a fight, John beat John the Second and John the second beat John. Who won?'
        return p
    }

    const menuTabs = ()=> {
        const menuTabs = document.createElement('div')
        menuTabs.classList.add('menuTabs')
        return menuTabs
    }

    const starters = () => {
        const starters = document.createElement('div')
        starters.classList.add('starters')
        const h6 = document.createElement('h6')
        h6.textContent = 'Starters'
        const hr = document.createElement('hr')
        const img = document.createElement('img')
        img.src = 'https://image.flaticon.com/icons/png/512/1706/1706607.png'
        starters.appendChild(h6)
        starters.appendChild(hr)
        starters.appendChild(img)
        return starters
    }

    const mainDish = () => {
        const mainDish = document.createElement('div')
        mainDish.classList.add('mainDish')
        const h6 = document.createElement('h6')
        h6.textContent = 'Main Dishes'
        const hr = document.createElement('hr')
        const img = document.createElement('img')
        img.src = 'https://www.kindermeals.com/static/website_app/img/icon_warm.png'
        mainDish.appendChild(h6)
        mainDish.appendChild(hr)
        mainDish.appendChild(img)
        return mainDish
    }

    const desserts = () => {
        const desserts = document.createElement('div')
        desserts.classList.add('deserts')
        const h6 = document.createElement('h6')
        h6.textContent = 'Desserts'
        const hr = document.createElement('hr')
        const img = document.createElement('img')
        img.src = 'https://cdn.iconscout.com/icon/free/png-256/pie-piecake-sweet-desert-food-31132.png'
        desserts.appendChild(h6)
        desserts.appendChild(hr)
        desserts.appendChild(img)
        return desserts
    }

    const drinks = () => {
        const drinks = document.createElement('div')
        drinks.classList.add('drinks')
        const h6 = document.createElement('h6')
        h6.textContent = 'Drinks'
        const hr = document.createElement('hr')
        const img = document.createElement('img')
        img.src = 'https://cdn.emojidex.com/emoji/seal/tropical_drink.png?1417131727'
        drinks.appendChild(h6)
        drinks.appendChild(hr)
        drinks.appendChild(img)
        return drinks
    }

    return {
        menu,
        h1,
        p,
        menuTabs,
        starters,
        mainDish,
        desserts,
        drinks
    }

})()

export default menu