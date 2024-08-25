let currentBoxIndex = 0;
async function DisplayPokemon() {
    const container = document.createElement("div");
    document.body.appendChild(container)
    
    const maxID = 1000;
       
    for (let i = 1; i <= 12; i++) {  
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
            const Raad = document.createElement("button");

            Pname.classList.add("Pname");
            Pdiv.classList.add("div1");
            Pid.classList.add("Pid");
            Pstats.classList.add("Pstats");
            Pweight.classList.add("Pweight");
            Pimg.classList.add("Pimg")
            container.classList.add("container")
            Raad.classList.add('Radd')
    
            Pname.textContent = `${data.name}`;
            Pid.textContent = `ID ${data.id}`;
            Pstats.textContent = `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
            Pimg.src = data.sprites.front_default;
            Pimg.style.display = "block"
            Pweight.textContent = `Weight: ${data.weight}`;
            Raad.textContent = "Add";
            
            
            Pdiv.appendChild(Pname);
            Pdiv.appendChild(Pid);
            Pdiv.appendChild(Pstats);
            Pdiv.appendChild(Pweight)
            Pdiv.appendChild(Pimg);
            Pdiv.appendChild(Raad);
            container.appendChild(Pdiv);

            Raad.addEventListener('click', function(){
                AddToTeam(data);
            });

        } catch (error){
            console.error(`fetch error: ${error}`)
        }
    } 
}

function AddToTeam(data) {
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

            
            currentBoxIndex = i + 1; 
            boxFilled = true;
            break; 
        }
    }

    if (!boxFilled) {
        alert("All boxes are full");
    }
}


//document.getElementById('remove').addEventListener('click', () => {
 //   const boxes = document.querySelectorAll('.box');
  //  for (let i = boxes.length - 1; i >= 0; i--) {
   //     const box = boxes[i];
    //    if (box.innerHTML.trim() !== "") {
     //       box.innerHTML = "";
      //      currentBoxIndex = i; 
       //     return;
       // }
   // }
//});

DisplayPokemon()
