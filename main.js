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

}
    document.getElementById('Submit').addEventListener('click', () => {
        var search = document.getElementById('Name');
        var hidden = document.getElementById("Details");

        if (search.value.trim() === ""){
            hidden.style.display = "none" 
        }else {
            hidden.style.display = "block";
            Pokemon();
        };

        document.getElementById('exit').addEventListener('click', () => {
            hidden.style.display = "none"
        })   
    
    });

