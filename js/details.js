const artContainer = document.querySelector(".artwork-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.artic.edu/api/v1/artworks/" + id;

async function fetchArtWork() {
  try {
    const response = await fetch(url);

    const details = await response.json();

    const facts = details.data;

    const title = facts.title;

    document.title = title;

    artContainer.innerHTML = "";

    createHtml(facts);
  } catch (error) {
    artContainer.innerHTML = errorMessage("An error has found.");
  }
}

function createHtml(facts) {
  artContainer.innerHTML = `<div class = "card"> <h2>${facts.title}</h2>
                                      <p>Art work type : ${facts.artwork_type_title}</p>
                                      <p> Artist : ${facts.artist_display} </p>
                                      <p>Department : ${facts.department_title} </p>
                                      <p>Id : ${facts.id} </p>
                                      <p>Place of origin : ${facts.place_of_origin} </p>
                                      </div>`;
}
fetchArtWork();
