const notescontainer = document.querySelector(".notes-container");
const creatbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//now we are creating function jo hamare local stroage ko check kare 
function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

//now we add local stroage 
function updatestorage(){
    localStorage.setItem("notes" , notescontainer.innerHTML);
}

creatbtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    //setting some style 
    inputBox.style.opacity = "60%";
    inputBox.style.fontFamily = "revert";
    inputBox.style.fontSize = "20px";
    inputBox.style.fontWeight = "600";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})

notescontainer.addEventListener("click", function(e){//agar notescontainer click kiya to fuction e pass kardo 
    if(e.target.tagName === "IMG"){//agar e target ,tlb uske tagname main jo img hai use kiya gayahai to remove kardo
        e.target.parentElement.remove();
        updatestorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){//onkey up har key ko jab key board par press hoti hai detect karta hai 
                updatestorage();//storage update karte raho jab jab key press ho 
            }
            
        });
    }
})

// here we will add ye enter key ka kaam karega 
document.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        document.execCommand("insertLinebreak");
        event.preventDefault();
    }
})

