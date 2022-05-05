import "./styles.css";
export default function header(){
    const pageHeader = document.createElement("div");
    pageHeader.textContent = "Pixel Cafe";
    pageHeader.classList.add("header");
    return pageHeader;
}