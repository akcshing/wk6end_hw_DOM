document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-animal-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;

    const newAnimal = document.createElement("li");
    const animalName = document.createElement("h1");
    const animalSpecies = document.createElement("h2");
    const animalContinent = document.createElement("h3");

    animalName.textContent = name;
    animalSpecies.textContent = species;
    animalContinent.textContent = continent;

    newAnimal.appendChild(animalName);
    newAnimal.appendChild(animalSpecies);
    newAnimal.appendChild(animalContinent);

    const animalList = document.querySelector("#animal-list");
    animalList.appendChild(newAnimal);

    form.reset();
  });

  const deleteButton = document.querySelector("#deleteButton");

  deleteButton.addEventListener("click", () => {
    const animalList = document.querySelector("#animal-list");
    while (animalList.firstChild) {
      animalList.removeChild(animalList.firstChild);
    };
  });


})
