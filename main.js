let pokemonData = 0;

async function Pokemon() {
    const PokeyName = document.getElementById("Name").value.toLowerCase();
    const PNAME = document.getElementById("Names");
    const PID = document.getElementById("ID");
    const imgElement = document.getElementById("Sprite")
    const Stats = document.getElementById("Stats")

    clearData(PNAME, PID, imgElement, Stats);
    
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeyName}/`);

        if (!response.ok) {
            console.error(`Error: ${response.statusText}`);
            return;
        }
        const data = await response.json();

    
        PNAME.textContent = `${data.name}`;
        PID.textContent = `ID: ${data.id}`;
        Stats.textContent = `Weight: ${data.weight}`;
        imgElement.src = data.sprites.front_default;
        imgElement.style.display = "block";

        const addButton = document.getElementById('Add');
        addButton.replaceWith(addButton.cloneNode(true)); 

        const newAddButton = document.getElementById('Add');  
        newAddButton.addEventListener('click', () => {
            AddToTeam2(data);
            
        });
    
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }

  
}
document.getElementById('Submit').addEventListener('click', () => {
    var search = document.getElementById('Name');
    var hidden = document.getElementById("Details");
    var Add = document.getElementById('Add');

    if (search.value.trim() === ""){
        hidden.style.display = "none" 
    }else {
        hidden.style.display = "block";
        Add.style.display = "block"
        Pokemon();
    };

    document.getElementById('exit').addEventListener('click', () => {
        hidden.style.display = "none"
        Add.style.display = "none"

        const addButton = document.getElementById('Add');  
    addButton.style.display = "none";  
        
    })   

});

function AddToTeam2(data) {
    const boxes = document.querySelectorAll('.box');
    let boxFilled = false;

    
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        if (box.innerHTML.trim() === "") {
            
            const Pimg = document.createElement('img');
            Pimg.src = data.sprites.front_default;
            Pimg.style.maxWidth = "100%";
            Pimg.style.maxHeight = "100%";
            Pimg.style.objectFit = "cover";
            
            
            box.innerHTML = "";
            box.appendChild(Pimg);

            
            pokemonData = i + 1; 
            boxFilled = true;
            break; 
        }
    }

    if (!boxFilled) {
        alert("All boxes are full");
    }
}

document.getElementById('remove').addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    for (let i = boxes.length - 1; i >= 0; i--) {
        const box = boxes[i];
        if (box.innerHTML.trim() !== "") {
            box.innerHTML = "";
            pokemonData = i; 
            return;
        }
    }
});

function clearData(PNAME, PID, imgElement, Stats) {
    PNAME.textContent = "";
    PID.textContent = "";
    Stats.textContent = "";
    imgElement.src = "";
    imgElement.style.display = "none";
}
      