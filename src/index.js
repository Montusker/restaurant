import Icon from './Los_Pollos_Hermanos_logo.png';



function component() {
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
  const content = document.getElementById("content");

  content.appendChild(component());