let range = document.getElementById("theRange").value;
document.getElementById("show-size").innerHTML = range;
let size = range;
let buttonSize = (500/size);


function changeSize(){
    location.reload();    
}

for (let i = 0; i<size ;i++){
    const horizantalDiv = document.createElement('div');
    horizantalDiv.setAttribute("id", i);
    horizantalDiv.setAttribute("class","horDiv");
    document.getElementById("container").appendChild(horizantalDiv);
    for ( let z = 0 ; z<size; z++){
        const btn = document.createElement('div');
        btn.setAttribute("class","grid-button");
        document.getElementById(i).appendChild(btn);
    }
   
}

function turnBlack(){
    this.setAttribute("class","touched");
}
function clearAll(){
    const buttons = document.querySelectorAll('.touched');
    buttons.forEach(button => {
        button.setAttribute("class","grid-button");
    });
}

function updateRange() {
    let x = document.getElementById("theRange").value;
    document.getElementById("show-size").innerHTML = x;
}





const buttons = document.querySelectorAll('.grid-button');

buttons.forEach(button => {
    button.style.width = buttonSize + "px";
    button.style.height = buttonSize + "px";
    button.addEventListener('mouseenter', turnBlack);

});



 

