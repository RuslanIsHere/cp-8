document.addEventListener("DOMContentLoaded", ()=> {
    const apiKey="6ScFWJkC8Gbsy1o0DlnKKUGkNAVpGYq7Rup5drN3";
    const marsResult=document.getElementById("marsResult");
    const button=document.getElementById("button");
    const title=document.getElementById("title");

    async function fetchMars() {
        try {
            const rover = document.getElementById("rover").value; 
            const sol = document.getElementById("sol").value; 
            const camera = document.getElementById("camera").value;

            if (!rover || !sol || !camera) {
                marsResult.innerHTML =
                `<div class="col-12 text-center">
                    <p class="text-danger">Veuillez remplir tous les champs de la formulaire</p>
                </div>`;
                return; 
            }

            let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de l'API Mars Rover Photos");
            }
            const data=await response.json();
            const photos = data.photos;
            console.log(data);
            if (photos.length === 0) {
                marsResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">Aucun information trouve.</p></div>`;
                return;
            }
            displayMarsPhotos(photos);
        } catch (error) {
            marsResult.innerHTML=`<div class="col-12 text-center"><p class="text-danger">${error.message}</p></div>`;
        };
    }

    function displayMarsPhotos(photos) {
        title.textContent = `Mars Rover Photos - ${photos[0]?.rover.name || "Rover"}`;
        marsResult.innerHTML = photos.map(photo => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow">
                    <img src="${photo.img_src}" class="card-img-top" alt="Mars Photo">
                    <div class="card-body">
                        <h5 class="card-title">Rover: ${photo.rover.name}</h5>
                        <p class="card-text">Camera: ${photo.camera.full_name}</p>
                        <p class="card-text">Date(Terre): ${photo.earth_date}</p>
                        <p class="card-text">Date(Mars Sol): ${photo.sol}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    button.addEventListener("click", (event) => {
        event.preventDefault();
        fetchMars();
    });
})