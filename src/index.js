import about from "./about.js";
import menu from "./menu.js";
import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import Logo from "./images/pixelcafe.png";
import './styles.css';




let pageContent = ()=>{
    let tabPanel = [];
    let pageContent = [];

    const content = document.getElementById("content");
    const navBar = document.createElement("nav");
    const logoImg = new Image();
    logoImg.src = Logo;
    logoImg.classList.add("img");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const aboutTab = document.createElement("button");
    
    tabContainer.classList.add("tabContainer");
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    aboutTab.textContent = "About";

    homeTab.classList.add("tabItem");
    menuTab.classList.add("tabItem");
    aboutTab.classList.add("tabItem");



    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(aboutTab);

    const homePage = home();
    const menuPage = menu();
    const aboutPage = about();
    
   tabPanel.push(homeTab);
   tabPanel.push(menuTab);
   tabPanel.push(aboutTab);

   pageContent.push(homePage);
   pageContent.push(menuPage);
   pageContent.push(aboutPage);


   tabPanel.forEach((tab, index)=>{

       tab.addEventListener("click", ()=>{
            pageContent.forEach((page, pageIndex)=>{
                if(pageIndex == index){
                    page.style.display = "flex";

                }else{
                    page.style.display = "none";
                }
            })

       })
   })


    navBar.appendChild(logoImg);
    navBar.appendChild(tabContainer);
    content.appendChild(navBar);
    content.appendChild(homePage);
    content.appendChild(menuPage);
    content.appendChild(aboutPage);
}


let restaurantPage = (()=>{
    const pageHeader = header();
    const pageFooter = footer();

    document.body.prepend(pageHeader);
    pageContent();
    document.body.appendChild(pageFooter);

})();

