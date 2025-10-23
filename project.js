// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);



const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I’m red!';
redParagraph.style.color = 'red';
document.body.appendChild(redParagraph); 



const blueHeading = document.createElement('h3');
blueHeading.textContent = 'I’m a blue h3!';
blueHeading.style.color = 'blue';
document.body.appendChild(blueHeading);


const borderedDiv = document.createElement('div');
borderedDiv.style.border = '1px solid black';
borderedDiv.style.backgroundColor = 'pink';

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = 'I’m in a div';

const pInDiv = document.createElement('p');
pInDiv.textContent = 'ME TOO!';

borderedDiv.appendChild(h1InDiv);
borderedDiv.appendChild(pInDiv);

document.body.appendChild(borderedDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

btn.addEventListener("click", function (e) {
  console.log(e);
});

// Add a div that display the results
// change all the console.log into dom methods
// display the running score 
// announce a winner of the game once one player reaches 5 points. 