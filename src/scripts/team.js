

class Team {
    constructor(img, name) {
        this.img = img
        this.name = name
    }
    team() {
        const team = document.createElement('div')
        team.classList.add('team')
        const h1 = document.createElement('h1');
        h1.textContent = 'Our Team'
        team.appendChild(h1)
        return team
    }

    chef() {
        const chef = document.createElement('div')
        chef.classList.add('chefs')

        return chef
    }

    chefInfo() {
        const chefInfo = document.createElement('div')
        chefInfo.classList.add('chefInfo')
        const img = document.createElement('img')
        img.src = this.img
        const h1 = document.createElement('h1')
        h1.textContent = this.name
        const p = document.createElement('p')
        p.textContent = 'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittismagna.  Aenean commodo ligula.'
        const hr = document.createElement('hr')

        chefInfo.appendChild(img)
        chefInfo.appendChild(h1)
        chefInfo.appendChild(p)
        chefInfo.appendChild(hr)

        return chefInfo
    }

    chefIcons() {
        const icon = document.createElement('div')
        const icon1 = document.createElement('i')
        const icon2 = document.createElement('i')
        const icon3 = document.createElement('i')

        icon.classList.add('icon')
        icon1.classList.add('fab')
        icon1.classList.add('fa-facebook-f')
        icon1.classList.add('iconE')

        icon2.classList.add('fab')
        icon2.classList.add('fa-twitter')
        icon2.classList.add('iconE')

        icon3.classList.add('fab')
        icon3.classList.add('fa-instagram')
        icon3.classList.add('iconE')

        icon.appendChild(icon1)
        icon.appendChild(icon2)
        icon.appendChild(icon3)
        
        return icon
    }
}

export default Team
