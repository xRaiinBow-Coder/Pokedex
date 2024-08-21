        
function w3_open() {
    var Bar = document.getElementById("Bar")
    Bar.style.display = "block";
    Bar.classList.add("open")

    
    }
    
    function w3_close() {
    var bar = document.getElementById("Bar")
    bar.classList.remove("open")
    bar.style.display = "none";

    }