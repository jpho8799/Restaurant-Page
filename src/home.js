import Cafe from "./images/cafe.gif";
export default function home(){
    let homeDiv = document.createElement('div');
    const cafeImg = new Image();
    cafeImg.src = Cafe;
    homeDiv.textContent = "Home Page";
    homeDiv.appendChild(cafeImg);
    return homeDiv;
    
}


