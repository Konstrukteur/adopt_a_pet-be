import pets from "../data/pets.mjs";

const getAnimalTypes = (request, response) => {
  const types = Object.keys(pets);
  response.send(types);
};

const getAnimalType = (request, response) => {
  const type = request.params.pet_type;

  if (pets?.[type] !== undefined) {
    response.json(pets[type]);
  } else {
    response.json({ error: "non existing pet type" });
  }
};

const getAnimal = (request, response) => {
  const type = request.params.pet_type;
  const id = request.params.pet_id - 1;

  const pet = pets[type][id];
  if (pets?.[type]?.[id] !== undefined) {
    response.json(pets[type][id]);
  } else {
    response.json({ error: "non existing pet type" });
  }

  response.json(pet);
};

export { getAnimalType, getAnimalTypes, getAnimal };
