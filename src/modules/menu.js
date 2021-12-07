function menu(){
    const content = document.getElementById("content");
    const dishMenu = document.createElement("div");
    dishMenu.className = "dishMenu";
    
    class Dishes {
        constructor(name, price, description){
            this.name = name;
            this.price = price;
            this.description = description;
        }
    }

    const food1 = new Dishes("Toast", "$4", "French Toast with Poached Egg");
    const drink1 = new Dishes("Boba", "$3", "Milk Tea with Pearls");

    let arr = [food1, drink1];

    for (let i = 0; i < arr.length; i++){
        const current = arr[i];
        const div = document.createElement("div");
        div.className = "foodItem";

        const name = document.createElement("div");
        name.textContent = current.name;
        div.appendChild(name);
        const price = document.createElement("div");
        price.textContent = current.price;
        div.appendChild(price);
        const description = document.createElement("div");
        description.textContent = current.description;
        div.appendChild(description);

        if (current.name === "Toast"){
            const pic = document.createElement("img");
            pic.setAttribute("src", "images/toast.png");
            pic.setAttribute("alt", "Picture of Toast");
            div.appendChild(pic);
        } else {
            const pic = document.createElement("img");
            pic.setAttribute("src", "images/boba.png");
            pic.setAttribute("alt", "Picture of Boba");
            div.appendChild(pic);
        }

        dishMenu.appendChild(div);
    }
    content.appendChild(dishMenu);
}

export {menu};