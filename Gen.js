
async function Gen1(gens) {
    const container = document.getElementById('pokemon-container');
    container.innerHTML = '';

    const Card = document.createElement("div");
    container.appendChild(Card);
    Card.classList.add("container1");


    const generationResponse = await fetch('https://pokeapi.co/api/v2/generation/');
    if (!generationResponse.ok) {
        console.error(`Error fetching generation data: ${generationResponse.statusText}`);
        return;
    }
    const generations = await generationResponse.json();

    let start, end;
    if (gens === 1) {
        start = 1;
        end = 151;
    } else if (gens === 2) {
        start = 152;
        end = 251;
    } else if (gens === 3) {
        start = 252;
        end = 386;
    } else if (gens === 4) {
        start = 387;
        end = 493;
    } else if (gens === 5) {
        start = 494;
        end = 649;
    }

    for (let i = start; i <= end; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            if (!response.ok) {
                console.error(`Error: ${response.statusText}`);
                continue;
            }

            const data = await response.json();

            const PGEN = document.createElement("button");
            const ID1 = document.createElement("h2");
            const Name1 = document.createElement("h1");
            const Img1 = document.createElement("img");

            PGEN.classList.add("div2");
            ID1.classList.add("ID1");
            Name1.classList.add("Name1");
            Img1.classList.add("Img1");
            
            const details = document.createElement("div2");
            details.classList.add("details1");
            details.style.display = "none";

            const height = document.createElement("p");
            height.textContent = `height: ${data.height} M`;
            details.appendChild(height);
            
            const type = document.createElement("p");
            type.textContent = `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
            details.appendChild(type);
            
            const speciesResponse = await fetch(data.species.url);
            if (!speciesResponse.ok) {
                console.error(`Error fetching species: ${speciesResponse.statusText}`);
                continue;
            };
            const speciesData = await speciesResponse.json();

            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${speciesData.habitat ? speciesData.habitat.name : 'Unknown'}`;
            details.appendChild(habitat);
            
            const generation = generations.results.find(gen => gen.url === speciesData.generation.url);
            const Generational = document.createElement('p');
            Generational.textContent = generation.name;
            details.appendChild(Generational);
            
        
            //const gender = speciesData.gender_rate >= 0 ? speciesData.gender_rate : 'Unknown';
            //const Gender = document.createElement('p');
            //Gender.textContent = `Gender Rate: ${gender}`;
            //details.appendChild(Gender);

            Name1.textContent = `${data.name}`;
            ID1.textContent = `ID: ${data.id}`;
            Img1.src = data.sprites.front_default;

            //const linking = document.createElement("a");
            //linking.href ="https://pokeapi.co/api/v2/pokemon/";
            //linking.target = "_blank";
            //linking.classList.add("link")

            //linking.appendChild(PGEN)
            PGEN.appendChild(Name1);
            PGEN.appendChild(ID1);
            PGEN.appendChild(Img1);
            Card.appendChild(PGEN);
            PGEN.appendChild(details);
            //Card.appendChild(linking);

            PGEN.addEventListener("click", () => {
                if (details.style.display === "none") {
                    details.style.display = "block";  
                } else {
                    details.style.display = "none";  
                }
            });


        } catch (error) {
            console.error(`fetch error: ${error}`);
        }
    }
}

document.body.addEventListener("click", (event) => {
    if (event.target.id === "one") {
        Gen1(1);
    } else if (event.target.id === "two") {
        Gen1(2);
    } else if (event.target.id === "three") {
        Gen1(3);
    } else if (event.target.id === "four") {
        Gen1(4);
    } else if (event.target.id === "five") {
        Gen1(5);
    }
});

Gen1(1)




