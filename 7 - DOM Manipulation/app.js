// Document Object Model

let elementWithID = document.getElementById("first-div");
console.log("Element with ID:", elementWithID);
elementWithID.textContent = "Div 1";


let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Element with Class:", elementsWithClass);
elementsWithClass[1].textContent = "Div 2";

let listItems = document.getElementsByTagName("li");
console.log("Element with Tag:", listItems);
listItems[3].style.backgroundColor = "aqua";
listItems[3].style.color = "tomato";

// Accept: #id, .class-name, tag
// Return: first element
let unorderedListItem = document.querySelector(".unordered-list");
console.log("Query Selector:", unorderedListItem);
unorderedListItem.style.backgroundColor = "aqua";
unorderedListItem.style.color = "tomato";

// Accept: #id, .class-name, tag
let headings = document.querySelectorAll("h3");
console.log("Query Selector All:", headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "white";
});

let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

let parentElement = document.querySelector("#parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();


let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.getElementById("page-container");
  let pageModeText = document.getElementById("page-mode-text");
  if (darkModeBtn.textContent === "Dark Mode") {
    pageContainer.style.backgroundColor = "Black";
    pageContainer.style.color = "white";
    pageModeText.textContent = "Dark Mode";
    darkModeBtn.textContent = "Light Mode";
  } else {
    pageContainer.style.backgroundColor = "white";
    pageContainer.style.color = "black";
    darkModeBtn.textContent = "Dark Mode";
  }
});