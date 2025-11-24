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
    let html = `latest update: 23.11.2025 by Lidus`;

    return html;
}

function drawHomePage(){
    let html = `homePage<br>
    - navigate to notes via buttons above <br>
    - running updates in update log <br>
    
    `;

    return html;
}