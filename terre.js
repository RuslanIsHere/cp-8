document.addEventListener("DOMContentLoaded", ()=> {
    const apiKey="6ScFWJkC8Gbsy1o0DlnKKUGkNAVpGYq7Rup5drN3";
    const terreResult=document.getElementById("terreResult");
    const dateButton=document.getElementById("dateButton");
    const title=document.getElementById("title");
    let today=new Date();
    today=today.toISOString().split('T')[0];
    document.getElementById("date").setAttribute("max", today);

    async function fetchTerre() {
        try {
            const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
            console.log(response);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de API TMDb");
            }
            const data=await response.json();
            console.log(data);
            if (data.length===0) {
                terreResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">Aucun information trouve</p></div>`;
            }
            displayResult(data);
        } catch (error) {
            terreResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }
    fetchTerre();

    function displayResult(terre){
        title.textContent=`Images de la Terre en temps réel`;
        terreResult.innerHTML = terre.map(t=>{
            const date = new Date(t.date);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = month < 10 ? "0" + month : month;
            day = day < 10 ? "0" + day : day;

            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${t.image}.png`;
            return`<div class="col-12 col-md-6 m-6">
                <div class="card h-100 shadow">
                    <img class="card-img" alt="${t.caption}" src="${imageUrl}">
                    <div class="card-body">
                        <h5 class="card-title">Date : ${t.date}</h5>
                    </div>
                </div>
            </div>`
        }).join(``);
    }

    async function fetchTerreByDate() {
        const date=document.getElementById("date").value;
        if (!date) { 
            title.innerHTML=``;
            terreResult.innerHTML = 
            `<div class="col-12 text-center">
                <p class="text-danger">Veuillez sélectionner une date.</p>
            </div>`;
            return;
        }
        try {
            const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`);
            console.log(response);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de API TMDb");
            }
            const data=await response.json();
            console.log(data);
            if (data.length===0) {
                terreResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">Aucun information trouve</p></div>`;
            }
            displayResultByDate(data, date);
        } catch (error) {
            terreResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }

    function displayResultByDate(terre, date){
        const parsedDate = new Date(date);

        if (terre.length<1) {
            title.textContent = "Aucune image n'a été trouvée pour la date choisie.";
            terreResult.innerHTML = "";
            return;
        }

        let year = parsedDate.getFullYear();
        let month = parsedDate.getMonth() + 1;
        let day = parsedDate.getDate();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        
        title.textContent=`Images de la Terre à la date choisie :  ${date}`;
        terreResult.innerHTML=terre.map(t=>{
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${t.image}.png`;
            return`
            <div class="col-12 col-md-4">
                <div class="card h-100 shadow">
                    <img class="card-img-top fluid" alt="${t.caption}" src="${imageUrl}">
                    <div class="card-body">
                        <h5 class="card-title">Date : ${t.date}</h5>
                    </div>
                </div>
            </div>`
        }).join(``);
    }

    dateButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (!date) {
            fetchTerre();
            return;
        }
        fetchTerreByDate();
    });
})