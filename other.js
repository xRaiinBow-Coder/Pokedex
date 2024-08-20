async function DisplayPokemon() {
    const container = document.createElement("div");
    document.body.appendChild(container)
    
    const maxID = 1000;
       
    for (let i = 1; i <= 10; i++) {  
        try{

            let random = Math.floor(Math.random()*maxID) + 1;

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
            if (!response.ok) {
                console.error(`Error: ${response.statusText}`);
                continue;
            }

            const data = await response.json();
            
            const Pdiv= document.createElement('button');
            const Pname = document.createElement("h1");
            const Pid = document.createElement("h2");
            const Pstats = document.createElement("h2");
            const Pweight = document.createElement('h2');
            const Pimg = document.createElement("img");
            const Rfresh = document.createElement("button");

            Pname.classList.add("Pname");
            Pdiv.classList.add("div1");
            Pid.classList.add("Pid");
            Pstats.classList.add("Pstats");
            Pweight.classList.add("Pweight");
            Pimg.classList.add("Pimg")
            container.classList.add("container")
            Rfresh.classList.add("Rfresh")
    
            Pname.textContent = `${data.name}`;
            Pid.textContent = `ID ${data.id}`;
            Pstats.textContent = `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
            Pimg.src = data.sprites.front_default;
            Pimg.style.display = "block"
            Pweight.textContent = `Weight: ${data.weight}`;
            Rfresh.textContent = "Refresh";
            
            
            Pdiv.appendChild(Pname);
            Pdiv.appendChild(Pid);
            Pdiv.appendChild(Pstats);
            Pdiv.appendChild(Pweight)
            Pdiv.appendChild(Pimg);
            Pdiv.appendChild(Rfresh);
            container.appendChild(Pdiv);
        } catch (error){
            console.error(`fetch error: ${error}`)
        }
    } 
}

DisplayPokemon();

