

function drawCSharpPage(){
    let html = /*HTML*/`
    <div class="notesPage">
        <div class="menu">
            <b>examples</b><br>
            <button class="menuButton" onclick="">incoming</button><br>

            <br>
            <b>codeAcademy:</b><br>
            <button class="menuButton" onclick="">incoming</button><br>
            <button class="menuButton" onclick="">incoming</button><br>

            <br>
            <b>skillShare:</b> <br>
            <button class="menuButton"> incoming</button> <br>
            <br>
            <b>Moodle:</b> <br>
            <button class="menuButton" onclick="">incoming</button><br>
            <br>
            <b>-</b><br>
            <button class="menuButton" onclick="clearContent()">clear</button><br>
        </div> 
    
        <div class="notes">
            <section>    
                ${content}
            </section>
            <section>
                hay que hacer la tarea y llenar esta pagina con algo sobre c#
            </section>
            <section>
                <b>links</b><br>
                <a href="https://getacademy.moodlecloud.com/mod/wiki/view.php?id=1212">Moodle oversikt</a>
            </section>
        </div>
    </div>
    `;

    return html; 
}


// ASCII RANGES (IMPORTANT PARTS)

// Digits 0–9:

// '0' is 48

// '1' is 49

// ...

// '9' is 57

// Uppercase letters A–Z:

// 'A' is 65

// 'B' is 66

// ...

// 'Z' is 90

// Lowercase letters a–z:

// 'a' is 97

// 'b' is 98

// ...

// 'z' is 122

// Because these ranges are continuous, you can check type like this: