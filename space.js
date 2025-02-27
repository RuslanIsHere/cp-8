document.addEventListener("DOMContentLoaded", ()=> {
    const apiKey="6ScFWJkC8Gbsy1o0DlnKKUGkNAVpGYq7Rup5drN3";
    const spaceResult=document.getElementById("spaceResult");
    const dateButton=document.getElementById("dateButton");
    const title=document.getElementById("title");
    let today=new Date();
    today=today.toISOString().split('T')[0];
    document.getElementById("date").setAttribute("max", today);

    async function fetchSpace() {
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date`);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de API TMDb");
            }
            const data=await response.json();
            console.log(data);
            if (data.length===0) {
                spaceResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">Aucun information trouve</p></div>`;
            }
            displayResult(data);
        } catch (error) {
            spaceResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }
    fetchSpace();

    async function fetchSpaceByDate() {
        try {
            const date=document.getElementById("date").value;
            console.log(date);
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de l'API APOD. La date saisie doit être entre le 16 juin 1995 et aujourd'hui");
            }
            const data=await response.json();
            console.log(data);
            if (data.code===400) {
                spaceResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">Aucun information trouve</p></div>`;
            }
            displayResult(data);
        } catch (error) {
            spaceResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }
    function displayResult(space){
        title.textContent=`Astronomy Picture of the Day :  ${space.date}`;
        spaceResult.innerHTML =
            `<div class="row">
                <div class="col-12 col-md-8">
                    <img class="img-fluid" style="width: 100%;" alt="${space.title}" src="${space.hdurl}">
                </div>
                <div class="col-12 col-md-4 d-flex">
                    <div>
                        <h5 class="card-title">${space.title}</h5>
                        <p class="card-text">Date : ${space.date || "Non renseigné"}</p>
                        <p class="card-text">Description : ${space.explanation}</p>
                    </div>
                </div>
            </div>
        `
    }

    dateButton.addEventListener("click", (event) => {
        event.preventDefault();
        fetchSpaceByDate();
    });
})