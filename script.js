function updateTime(){
    document.getElementById("timeDisplay").textContent=document.getElementById("set-time").value;
    document.getElementById("sbreakDisplay").textContent=document.getElementById("set-shortbreak").value;
    document.getElementById("lbreakDisplay").textContent=document.getElementById("set-longbreak").value;
}

function displayInfo(){
    let about = document.querySelector(".about");
    if (about.style.opacity === "1"){
        about.style.opacity="0";
    }else{
        about.style.opacity="1";
    }
}

function displayNavbar(){
    let navthingy = document.querySelector(".options");
    if(navthingy.style.right === "-25%"){
        navthingy.style.right="0";
    }else{
        navthingy.style.right="-25%";
    }
}

