import Cafe from "./images/cafe.gif";
import './styles.css';
export default function home(){
    const homePage = document.createElement('div');
    const header = document.createElement('header');
    const section = document.createElement("section");
    const hours = document.createElement("h2");
    const scheduleMonFri = document.createElement("p");
    const scheduleSat = document.createElement('p');
    const scheduleSun = document.createElement('p');
    hours.textContent = "Hours";
    scheduleMonFri.textContent = "Monday - Friday: 9AM to 7PM";
    scheduleSat.textContent = "Saturday: CLOSED";
    scheduleSun.textContent= "Sunday: 8AM tp 5PM";
    
    section.appendChild(hours);
    section.appendChild(scheduleMonFri);
    section.appendChild(scheduleSat);
    section.appendChild(scheduleSun);
    

    homePage.classList.add("homePage");
    
    homePage.appendChild(header);
    homePage.appendChild(section);
    return homePage;
    
}


