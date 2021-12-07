function home() {
    const content = document.getElementById("content");
    const homeScreen = document.createElement("div");
    homeScreen.className = "homeScreen";
    
    const words = document.createElement("div");
    const words1 = document.createElement("p");
    words1.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,";
    words.appendChild(words1);
    const words2 = document.createElement("p");
    words2.textContent = "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.";
    words.appendChild(words2);
    homeScreen.appendChild(words);

    const pic = document.createElement("img");
    pic.setAttribute("src", "images/homepage.png");
    pic.setAttribute("alt", "Picture of Restaurant");
    homeScreen.appendChild(pic);

    const footnote = document.createElement("div");
    footnote.className = "footnote";
    footnote.textContent = "Made by Dexter";
    homeScreen.appendChild(footnote);

    content.appendChild(homeScreen);
}

export {home};