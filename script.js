const backgrounds = document.querySelector('#backgrounds')
const navbar = document.querySelector('#navbar')
const navLinks = document.querySelectorAll('.navbar-link')
const mainContent = document.querySelectorAll('.main-content')
const hoursContent = document.querySelector('#hours-content')
const menuContent = document.querySelector('#menu-content')
const shopContent = document.querySelector('#shop-content')
const cateringContent = document.querySelector('#catering-content')
const aboutContent = document.querySelector('#about-content')
const cartContent = document.querySelector('#cart-content')
const menuContainer = document.querySelector('#menu-content')
const navBtn = document.querySelector('#mobile-nav-button')
const bar1 = document.querySelector('#bar-1')
const bar2 = document.querySelector('#bar-2')
const bar3 = document.querySelector('#bar-3')

navClicked = () =>{
    navBtn.addEventListener('click', ()=>{
        bar1.classList.toggle('bar-1-clicked')
        bar2.classList.toggle('bar-2-clicked')
        bar3.classList.toggle('bar-3-clicked')
        backgrounds.classList.toggle('blurred')
    })
}





// #region navbar
navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        if (link.id != 'menu'){
            deleteMenu();
        };
        if (link.id == 'home'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                backgrounds.className = 'home-bg'
            }, 300);

        } else if (link.id == 'menu'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                menuContent.classList.remove('content-not-visible')
                backgrounds.className = 'menu-bg'
                
                getAndDeleteMenu()
            }, 300);

        } else if (link.id == 'shop'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                shopContent.classList.remove('content-not-visible')
                backgrounds.className = 'shop-bg'
            }, 300);

        } else if (link.id == 'catering'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                cateringContent.classList.remove('content-not-visible')
                backgrounds.className = 'catering-bg'
            }, 300);

        } else if (link.id == 'about'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                aboutContent.classList.remove('content-not-visible');
                backgrounds.className = 'about-bg'
            }, 300);
            
        } else if (link.id == 'cart'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                cartContent.classList.remove('content-not-visible')
                backgrounds.className = 'cart-bg'
            }, 300);

        } else if (link.id == 'hours'){
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                hoursContent.classList.remove('content-not-visible');
                backgrounds.className = 'hours-bg'
            }, 300);

        } else {
            backgrounds.classList.add('fade')
            setTimeout(() => {
                mainContent.forEach(card=>{
                    card.classList.add('content-not-visible')
                })                
            }, 100);
            setTimeout(() => {
                backgrounds.className = 'home-bg'
            }, 300);
    
        }
    })
})
// #endregion








// const url = `https://my-json-server.typicode.com/reric88/StorehouseCoffee/db`

// createMenuItem = (item) =>{
//     const menuItem = document.createElement('section')
//     menuItem.classList.add('menu-box')
//     menuContainer.append(menuItem)
//     muffins = item.data.bakedGoods.muffins
//     coffee = item.data.beverage.coffee
//     console.log(coffee[1]);
//     menuItem.innerHTML = `
//     <div class="name-title">
//         <h3>${coffee.name}</h3>
//         <h4>${coffee.description}</h4>
//         <h4>Price: ${coffee.price}</h4>
//     </div>
//     `
// }


// async function getMenu(item){
//     const menu = await axios.get(url);
//     const muffins = menu.data.bakedGoods.muffins
//     const cinnamonRoll = menu.data.bakedGoods.cinnamonRoll
//     const danish = menu.data.bakedGoods.danish
//     const coffee = menu.data.beverage.coffee
//     // console.log(coffee.coffee.length);
//     console.log(coffee[item].name);
//     console.log(coffee[item].description);
//     console.log(coffee[item].size);
//     console.log(coffee[item].price);
//     createMenuItem(menu)

// }
// // getMenu(1)

// async function getItem(i){
//     const menu = await axios.get(url);
//     const coffee = menu.data.beverage.coffee
//     for (i=1; i<coffee.length; i++){
//         await getMenu(i)
//     }
// }

// getItem()







































const url = `https://my-json-server.typicode.com/reric88/StorehouseCoffee/db`

createMenuItem = (item) =>{
    const menuItem = document.createElement('section')
    menuItem.classList.add('menu-box')
    menuContainer.append(menuItem)
    coffee = item
    // console.log('createMenuItem', item);
    menuItem.innerHTML = `
    <div class="item-container">
        <h5>${item.name}</h5>
        <h6>${item.description}</h6>
        <h6>${item.size}</h6>
        <h6>Price: $${item.price}</h6>
    </div>
    `
}

getPrices = (item) =>{

}


async function getMenu(item){
    const menu = await axios.get(url);
    const data = menu.data
    const muffins = menu.data.bakedGoods.muffins
    const cinnamonRoll = menu.data.bakedGoods.cinnamonRoll
    const danish = menu.data.bakedGoods.danish
    const coffee = menu.data.beverage.coffee
    const espresso = menu.data.beverage.espresso
    console.log(item);
    createMenuItem(espresso[item])

}

async function getItem(i){
    const menu = await axios.get(url);
    const coffee = menu.data.beverage.coffee
    const espresso = menu.data.beverage.espresso
    for (i=0; i<coffee.length; i++){
        await getMenu(i)
    }
    for (i=0; i<espresso.length; i++){
        await getMenu(i)
    }
}

deleteMenu = () =>{
    menuContainer.innerHTML = ''
}

getAndDeleteMenu = () =>{
    menuContainer.innerHTML = ''
    getItem()
}

// getItem()