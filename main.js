let pokemonData = 0;

async function Pokemon() {
    const PokeyName = document.getElementById("Name").value.toLowerCase();
    const PNAME = document.getElementById("Names");
    const PID = document.getElementById("ID");
    const imgElement = document.getElementById("Sprite")
    const Stats = document.getElementById("Stats")
    
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

        document.getElementById('Add').addEventListener('click', () => {
            AddToTeam2(data);
        })


}
    document.getElementById('Submit').addEventListener('click', () => {
        var search = document.getElementById('Name');
        var hidden = document.getElementById("Details");
        var AddB = document.getElementById('Add');

        if (search.value.trim() === ""){
            hidden.style.display = "none" 
        }else {
            hidden.style.display = "block";
            AddB.style.display = "block"
            Pokemon();
        };

        document.getElementById('exit').addEventListener('click', () => {
            hidden.style.display = "none"
        })   
    
    });

function AddToTeam2(data) {
    const boxes = document.querySelectorAll('.box');

    if (pokemonData < boxes.length) {
        const box = boxes[pokemonData];

        box.innerHTML = "";
        
        const imgElement = document.createElement('img');
        imgElement.src = data.sprites.front_default;
        imgElement.style.maxWidth = "100%";
        imgElement.style.maxHeight = "100%";
        imgElement.style.objectFit = "cover";

        box.appendChild(imgElement);

        pokemonData++;
    } else {
        alert("boxes are full")
    }
}   
document.getElementById('remove').addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');

    for (let i = boxes.length - 1; i >= 0; i--) {
        const box = boxes[i];
        if (box.innerHTML.trim() !== "") {
            box.innerHTML = "";
            pokemonData--;
            return;
        }
    }
});