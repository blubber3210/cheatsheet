const app = document.getElementById("app");


updateView();
function updateView(){
    let content = ``

    if (model.app.currentPage == 'jsPage'){
        content = drawJSView();
    } else if (model.app.currentPage == 'cSharpPage'){
        content = drawCSharpPage();
    } else if (model.app.currentPage == 'homePage'){
        content = drawHomePage();
    } else if (model.app.currentPage == 'updateNotesPage'){
        content = drawUpdatesPage();
    } else {
        content = 'something went wrong';
    }

    app.innerHTML = `
    <div class="header">${drawHeader()}</div>
    
    <div class="mainContent">
    ${content}
    </div>

    <div class="footer">${drawFooter()}</div>
    `; 
}

function drawHeader(){
    let html = `
    <div class="buttonsDiv">
        <button class="header" onclick="changePage('homePage')">home</button>
        <button class="header" onclick="changePage('jsPage')">javascript</button>
        <button class="header" onclick="changePage('cSharpPage')">c#</button>
        <button class="header" onclick="changePage('updateNotesPage')">update log</button>
    </div>
    <div>
    <h1><img style="width: 50px;"src="images/Poodle6.png">cheatsheet</h1>
    </div>
    `;

    return html;
}

function drawFooter(){
    let html = `latest update: 24.11.2025`;

    return html;
}

function drawHomePage(){
    let html = `homePage<br>
    - navigate to notes via buttons above <br>
    - running updates in update log <br>
    Errors: <br>
    "content" stays the same on both js and c# view <br>
    (have to update and streamline models with all functions from previous setup <br>
    ie. multiple bugs that don't fit with the new MVC)<br>
    focusing on C# the next two months, will get back to this after.
    
    `;

    return html;
}