let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let frontend = document.getElementById("frontend");
let backend = document.getElementById("backend");
let qualites = document.getElementById("qualites");
let defauts = document.getElementById("defauts");

button1.onclick = () => {
    if(button1.className != "active"){
        button1.className = "active";
        button2.className = "";
        frontend.className = "";
        backend.className = "";
        qualites.className = "hidden";
        defauts.className = "hidden";
    }
}

button2.onclick = () => {
    if (button2.className != "active") {
        button2.className = "active";
        button1.className = "";
        frontend.className = "hidden";
        backend.className = "hidden";
        qualites.className = "";
        defauts.className = "";
    }
}