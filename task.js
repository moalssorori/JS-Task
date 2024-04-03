// create and style mainDiv
let mainDiv = document.createElement(`div`);
mainDiv.style.cssText = 'width: 900px; height: auto; background-color: orange; margin: auto;padding:20px';
mainDiv.style.position = 'relative';
mainDiv.style.display = 'grid';
mainDiv.style.borderRadius = '20px';
// Append mainDiv to page
document.body.appendChild(mainDiv);

// create and style title
let title = document.createElement(`h3`);
let titleText = document.createTextNode("Simple ToDo list");
title.style.textAlign = "center";
title.style.fontSize = "30px";
title.appendChild(titleText);
// Append title to mainDiv
mainDiv.appendChild(title);

//create and style inputField
let inputField = document.createElement(`input`);
inputField.style.fontSize = '30px';
inputField.placeholder = 'Enter Your Task Here';
inputField.type = 'text';
inputField.style.width = '770px';
inputField.style.height = '50px';
inputField.style.marginLeft = '50px';
inputField.style.marginRight = '50px';
inputField.style.borderRadius = '20px';
inputField.style.borderStyle = 'none';
inputField.style.paddingLeft = '20px';
inputField.style.boxShadow = '';
// Append inputField to mainDiv
mainDiv.appendChild(inputField);

//create and style addButton
let addButton = document.createElement(`button`);
addButton.style.fontSize = '20px';
addButton.style.backgroundColor = 'red';
addButton.style.borderStyle = 'none';
addButton.style.borderRadius = '20px';
addButton.style.backgroundColor = 'purple';
addButton.style.color = 'white';
addButton.textContent = 'Add Task';
addButton.style.width = '150px';
addButton.style.height = '40px';
addButton.style.marginLeft = '50px';
addButton.style.marginTop = '10px';
addButton.style.marginBottom = '30px';
addButton.style.padding = '5px';
// Append addButton to mainDiv
mainDiv.appendChild(addButton);
addButton.addEventListener('click', createTasks);

// create the createTasks function
function createTasks() {
    // remove spaces from inputField
    let inputValue = inputField.value.trim();
    // condition if the inputField is empty the function don't work
    if (inputValue !== '') {
        // create the div contain two divs and style
        let tasks = document.createElement(`div`);
        tasks.style.display = 'flex';
        tasks.style.justifyContent = 'space-between';
        tasks.style.width = '700px';
        tasks.style.height = '20px';
        tasks.style.marginLeft = '70px';
        tasks.style.marginRight = '80px';
        tasks.style.marginTop = '20px';
        tasks.style.padding = '10px';
        tasks.style.borderRadius = '20px';
        tasks.style.alignItems = 'center';
        tasks.style.backgroundColor = 'white';
        tasks.style.paddingLeft = '40px';
        tasks.style.fontSize = '30px';
        // set the inputField value in "value"
        let value = inputField.value;
        // create first div contain the value
        let task = document.createElement(`div`);
        task.textContent = value;

        // create first button and style
        let complete = document.createElement(`button`);
        complete.textContent = 'complete';
        complete.style.width = '80px';
        complete.style.height = '30px';
        complete.style.borderStyle = 'none';
        complete.style.borderRadius = '20px';
        complete.style.marginRight = '20px';
        complete.style.backgroundColor = 'purple';
        complete.style.color = 'white';
        // add event to first button
        complete.addEventListener('click', function() {
            tasks.remove();
        });

        // create second button and style
        let delInput = document.createElement(`button`);
        delInput.style.marginRight = '20px';
        delInput.style.backgroundColor = 'purple';
        delInput.style.color = 'white';
        delInput.style.width = '80px';
        delInput.style.height = '30px';
        delInput.style.borderStyle = 'none';
        delInput.style.borderRadius = '20px';
        delInput.textContent = 'Delete';
        // add event to second button
        delInput.addEventListener('click', function() {
            tasks.remove();
        });



        // create div contain buttons and style
        let buttonsDiv = document.createElement(`div`);
        buttonsDiv.style.display = 'flex';
        buttonsDiv.style.justifyContent = 'space-between';
        buttonsDiv.appendChild(complete);
        buttonsDiv.appendChild(delInput);

        // add  or append divs(task and buttonsDiv) to tasks
        tasks.appendChild(task);
        tasks.appendChild(buttonsDiv);
        // append task to mainDiv
        mainDiv.appendChild(tasks);
        // clear inputField
        inputField.value = '';
    }
}