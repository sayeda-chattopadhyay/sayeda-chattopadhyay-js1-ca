const resultsContainer = document.querySelector(".results");

const url = "https://api.artic.edu/api/v1/artworks";

async function getArtWork() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.data;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 12) {
        break;
      }

      if (!facts[i].artist_title) {
        continue;
      }

      resultsContainer.innerHTML += `<a href="details.html?id=${facts[i].id}"class="result">
                                    <h2>${facts[i].title}</h2>
                                    <Div class="card">
                                    <p>Id: ${facts[i].id} </p>
                                    <p>Artist title: ${facts[i].artist_title} </p>
                                    <p>Place_of_origin: ${facts[i].place_of_origin} </p>
                                    </Div>
    
       </a>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = errorMessage("An error has found.");
  }
}

getArtWork();
