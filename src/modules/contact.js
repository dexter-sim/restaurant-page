function contact() {
    const content = document.getElementById("content");

    const box = document.createElement("div");
    box.className = "box";

    const left = document.createElement("div");
    const one = document.createElement("h2");
    one.textContent = "Lorem Ipsum";
    left.appendChild(one);

    const two = document.createElement("p");
    two.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
    left.appendChild(two);

    const three = document.createElement("p");
    three.textContent = "+65 1234 5678";
    left.appendChild(three);

    const four = document.createElement("p");
    four.textContent = "Everyday 0900 - 2200";
    left.appendChild(four);
    
    const right = document.createElement("div");
    const map = document.createElement("img");
    map.setAttribute("src", "images/map.png");
    map.setAttribute("alt", "Map of Restaurant");
    right.appendChild(map);

    box.appendChild(left);
    box.appendChild(right);
    content.appendChild(box);
}

export {contact};