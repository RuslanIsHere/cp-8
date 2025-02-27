document.addEventListener("DOMContentLoaded", ()=> {
    const apiKey="6ScFWJkC8Gbsy1o0DlnKKUGkNAVpGYq7Rup5drN3";
    const objetsResult=document.getElementById("objetsResult");
    const dateButton=document.getElementById("dateButton");
    const title=document.getElementById("title");
    let today=new Date();
    today=today.toISOString().split('T')[0];
    document.getElementById("date").setAttribute("max", today);

    async function fetchObjets() {
        try {
            const date=document.getElementById("date").value;
            // pour récuperer une date de fin 
            // const dateEnd=document.getElementById("date-end").value;
            if (!date) {
                objetsResult.innerHTML =
                `<div class="col-12 text-center">
                    <p class="text-danger">Veuillez remplir tous les champs de la formulaire</p>
                </div>`;
                return; 
            }

            console.log(date);
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de l'API NeoWs");
            }
            const data=await response.json();
            const objectsByDate = Object.values(data.near_earth_objects).flat();
            console.log(data);
            if (objectsByDate.length===0) {
                objetsResult.innerHTML=`
                <div class="col-12 text-center">
                    <p class="text-danger">Aucun information trouve pour cette date.</p>
                </div>`;
                return;
            }
            displayResult(objectsByDate);
        } catch (error) {
            objetsResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }

    function displayResult(objets){
        title.textContent=`Asteroids - NeoWs`;
        objetsResult.innerHTML=objets.map(t=>{
            const diameter = t.estimated_diameter.kilometers;
            const distance = t.close_approach_data.length > 0 ? t.close_approach_data[0].miss_distance.kilometers : "Inconnue"; // 
            return`
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${t.name}</h5>
                        <p class="card-text">Danger Potentiel: ${t.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
                        <p class="card-text">Taille: ${diameter.estimated_diameter_min.toFixed(2)} - ${diameter.estimated_diameter_max.toFixed(2)} km</p>
                        <p class="card-text">Distance par rapport à la Terre: ${parseInt(distance)} km</p>
                    </div>
                </div>
            </div>`
        }).join(``);
    }

    dateButton.addEventListener("click", (event) => {
        event.preventDefault();
        fetchObjets();
    });
})