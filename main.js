let pokemonData = 0;

async function Pokemon() {
    const PokeyName = document.getElementById("Name").value.toLowerCase();
    const PNAME = document.getElementById("Names");
    const PID = document.getElementById("ID");
    const imgElement = document.getElementById("Sprite")
    const Stats = document.getElementById("Stats")
    const Name = document.getElementById('Name').value=null;

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
document.getElementById('exit').addEventListener('click', () => {
    var Add = document.getElementById('Add');
    var Who = document.getElementById("who");
    var nameP = document.getElementById("Names");
    var idP = document.getElementById("ID");
    var statsP = document.getElementById("Stats");
    var sprite = document.getElementById("Sprite");
    var WHO = document.getElementById("Pik");

    nameP.style.display = "none";
    idP.style.display = "none";
    statsP.style.display = "none";
    sprite.style.display = "none";
    Add.style.display = "none"; 
    Who.style.display = "block"; 
    WHO.style.display = "block"; 
});

document.getElementById('Submit').addEventListener('click', () => {
    var search = document.getElementById('Name');
    var hidden = document.getElementById("Details");
    var Add = document.getElementById('Add');
    var Who = document.getElementById("who");
    var nameP = document.getElementById("Names");
    var idP = document.getElementById("ID");
    var statsP = document.getElementById("Stats");
    var sprite = document.getElementById("Sprite");
    var WHO = document.getElementById("Pik");
    var Name = document.getElementById('Name')

    if (search.value.trim() === "") {
        nameP.style.display = "none";
        idP.style.display = "none";
        statsP.style.display = "none";
        sprite.style.display = "none";
    } else {
        hidden.style.display = "block";
        Add.style.display = "block";
        nameP.style.display = "block";
        idP.style.display = "block";
        statsP.style.display = "block";
        sprite.style.display = "block";
        Who.style.display = "none";
        WHO.style.display = "none";
        Pokemon();
    }
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

function clearData(PNAME, PID, imgElement, Stats, Name) {
    PNAME.textContent = "";
    PID.textContent = "";
    Stats.textContent = "";
    imgElement.src = "";
    imgElement.style.display = "none";
}
      