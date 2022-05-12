import "./styles.css";
import strawberryCake from "./images/strawberry_cake.png";
import classicPancake from "./images/classic_pancake.png";
import iceLemonade from "./images/ice_lemonade.png";
import strawberryPancake from "./images/strawberry_pancake.png";
import donut from "./images/donut.png";
import pocky from "./images/pocky.png";
let menu = [
    {
        title: "Fresh Strawberry Cake",
        img: strawberryCake,
        description: "Seasonal strawberries baked with Pixel's Cafe famous Angel Foo Cake"
    }, 
    {
        title: "Classic Pancake",
        img: classicPancake,
        description: "Three buttermilk pancakes served with whipped butter"
    }, 
    {
        title: "Ice Lemonade",
        img: iceLemonade,
        description: "Freshly squeezed lemonade"

    },
    {
        title: "Strawberry Pancake",
        img: strawberryPancake,
        description: "Three buttermilk pancake served with fresh strawberries and whipped butter"

    },
    {
        title: "Donut",
        img: donut,
        description: "Donut with rainbow sprinkles"
    },
    {
        title: "Pocky",
        img: pocky,
        description: "A pack of strawberry flavored pocky"
    }
]


export default function createMenu(){
    const menuPage = document.createElement('div')
    const menuDiv = document.createElement('section');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";
    menuPage.appendChild(menuTitle);
   menu.forEach(menuItem=>{
       const menuCard = document.createElement("div");
       const itemTitle = document.createElement("h2");
       const itemImg = document.createElement("img");
       const itemDescription = document.createElement("p");

       menuCard.classList.add("menuCard");
    
       itemTitle.textContent = menuItem.title;
       itemImg.src = menuItem.img;
       itemDescription.textContent = menuItem.description;

       menuCard.appendChild(itemTitle);
       menuCard.appendChild(itemImg);
       menuCard.appendChild(itemDescription);
       console.log(menuCard);
       menuDiv.appendChild(menuCard);
       
   })

   menuDiv.classList.add("menu");
   menuPage.classList.add("menuPage");
   menuPage.appendChild(menuDiv);

    
    return menuPage;
}




