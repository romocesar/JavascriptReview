//This script demonstrates the functioning of:
//

//Declaration of constants
const division = `<div>
                    <p>**************************************</p>
                  </div>`;
const heading = `<h1>Part 2</h1>`;
const position = "beforeEnd";
const description = `<h2>Overview of variables</h2>`
const bodyElement = document.getElementById("root");

bodyElement.insertAdjacentHTML(position, division);
bodyElement.insertAdjacentHTML(position, heading);
bodyElement.insertAdjacentHTML(position, description);
