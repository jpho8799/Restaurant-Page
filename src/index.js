import about from "./about.js";
import menu from "./menu.js";
import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import './styles.css';



let pageContent = ()=>{
    let tabPanel = [];
    let pageContent = [];
    const content = document.getElementById("content");
    const tabContainer = document.createElement("div");
    const homeTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const aboutTab = document.createElement("button");
    
    tabContainer.classList.add("tabContainer");
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    aboutTab.textContent = "About";


    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(aboutTab);

    content.appendChild(tabContainer);

    const homePage = home();
    const menuPage = menu();
    const aboutPage = about();


    homePage.classList.add("pageContent");
    menuPage.classList.add("pageContent");
    aboutPage.classList.add("pageContent");

    
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
                    page.style.display = "block";

                }else{
                    page.style.display = "none";
                }
            })

       })
   })



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

})()