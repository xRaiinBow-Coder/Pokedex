        
function Sopen() {
    var Bar = document.getElementById("Bar")
    Bar.style.display = "block";
    Bar.classList.add("open")

    
    }
    
    function Sclose() {
    var bar = document.getElementById("Bar")
    bar.classList.remove("open")
    bar.style.display = "none";

    }

//function Pages() {
//    document.getElementById("Main").addEventListener('click', () => {
//        window.location.href = "Main.html";
//    });
//}

