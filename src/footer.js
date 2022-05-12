import "./styles.css";

export default function footer(){
    const pageFooter = document.createElement("div");
    pageFooter.classList.add("footer");
    pageFooter.textContent = "This is the footer";
    return pageFooter
}