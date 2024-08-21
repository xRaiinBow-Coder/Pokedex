        
function open() {
    var Bar = document.getElementById("Bar")
    Bar.style.display = "block";
    Bar.classList.add("open")

    
    }
    
    function close() {
    var bar = document.getElementById("Bar")
    bar.classList.remove("open")
    bar.style.display = "none";

    }

    