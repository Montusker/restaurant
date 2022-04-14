import Icon from './Los_Pollos_Hermanos_logo.png';

const content = document.getElementById("content");



function home() {
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const paragraph = document.createElement('p');

    header.innerHTML = "Los Pollos Hermanos";
    element.appendChild(header);

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);


    paragraph.innerHTML = "The best fried chicken there is!"
    element.appendChild(paragraph);

    return element;
}

function menu() {
    const element = document.createElement('div');
    const menuTitle = document.createElement('h1');
    const menuSection = document.createElement('h2');

    const foodItem = document.createElement('h3');
    const price = document.createElement('h4');
    const foodDescription = document.createElement('p');


    menuTitle.innerHTML = "Los Pollos Hermanos' Menu";
    element.appendChild(menuTitle);

    menuSection.innerHTML = "Our Favorites!";
    element.appendChild(menuSection);
    
    foodItem.innerHTML = "The Pollo Special";
    element.appendChild(foodItem);

    price.innerHTML = "$7.50";
    element.appendChild(price);

    foodDescription.innerHTML = "3 of our world famous chicken tenders, a side of curly fries, our house sauce, and a medium drink!"
    element.appendChild(foodDescription);

    return element;
}

function about() {
    const element = document.createElement('div');
    const aboutUs = document.createElement('h1');
    const sectionHeader = document.createElement('h2');
    const paragraph = document.createElement('p');

    aboutUs.innerHTML = "About Us!";
    element.appendChild(aboutUs);

    sectionHeader.innerHTML = "Founding";
    element.appendChild(sectionHeader);
    
    paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    element.appendChild(paragraph);


    return element;


}

function clearContent(){
    content.innerHTML = "";
}


const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.onclick = () => {
    clearContent();
    content.appendChild(home());
}
menuButton.onclick = () => {
    clearContent();
    content.appendChild(menu());
}
aboutButton.onclick = () => {
    clearContent();
    content.appendChild(about());
}




  content.appendChild(home());