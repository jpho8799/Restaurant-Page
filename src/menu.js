
class MenuItem {
    constructor(item, price, description){
        this._item = item;
        this._price = price;
        this._description = description;
    }



}

export default function menu(){
    let menuDiv = document.createElement('div');
    menuDiv.textContent = "This is the menu content";
    return menuDiv;
}




