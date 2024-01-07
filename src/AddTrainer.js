import { useState } from "react";

export default function AddTrainer({
  pokemonArray,
  onTrainerAdd,
  showAddTrainer,
  setShowAddTrainer,
}) {
  const [trainerName, setTrainerName] = useState("");
  const [pokeArr, setPokeArr] = useState([]);
  const [imgURL, setImgUrl] = useState("https://i.pravatar.cc/48?u=");
  const [des, setDes] = useState("");
  function handlePokeAdd(pokemon) {
    if (pokeArr.length < 10) {
      setPokeArr([...pokeArr, pokemon]);
    }
  }

  function subUser(e) {
    e.preventDefault();
    const newTrainer = {
      id: Date.now(),
      name: trainerName,
      description: des,
      image: imgURL,
      pokemon: pokeArr,
      fightingPokemon: [],
    };
    onTrainerAdd(newTrainer);
    setTrainerName("");
    setPokeArr([]);
    setImgUrl("https://i.pravatar.cc/48?u=");
    setDes("");
    setShowAddTrainer(!showAddTrainer);
  }
  return (
    <div>
      <div className="third-component">
        <div className="third-component-item1">
          <form className="form-add-friend">
            <label>Trainer's Name</label>
            <input
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
            />
            <label>Img URL</label>
            <input
              value={imgURL}
              onChange={(e) => setImgUrl(imgURL + e.target.value)}
            />
            <label>Description</label>
            <textarea
              className="descIn"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            ></textarea>

            <button className="button" onClick={(e) => subUser(e)}>
              Add
            </button>
            <input
              disabled
              value={`You can have ${10 - pokeArr.length} pokemon`}
            />
          </form>
        </div>
        <div className="third-component-item2">
          <div className="select-pokemon-text2">
            <h3>Choose Pokemon</h3>
          </div>
          <div className="second-side-bar2">
            {pokemonArray.map((pokemon) => (
              <ShowPokemon
                pokemon={pokemon}
                onSetPokeArr={handlePokeAdd}
                key={pokemon.name}
              />
            ))}
            <ShowPokeArr pokeArr={pokeArr} />
          </div>
          <div></div>
          {/* <div className="choose-pokemon2">
            <button className="button">Choose</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function ShowPokemon({ pokemon, onSetPokeArr }) {
  function handlePokeClick(e) {
    e.preventDefault();
    onSetPokeArr(pokemon);
  }
  return <span onClick={(e) => handlePokeClick(e)}>{pokemon.name}</span>;
}

function ShowPokeArr({ pokeArr }) {
  let poke = "";
  if (pokeArr.length === 10) {
    alert("You cant have more then 10 pokemon");
  }

  if (pokeArr.length > 0) {
    let pokeStringArr = pokeArr?.map((pokemon) => pokemon?.name);
    let pokest = pokeStringArr?.reduce((prev, pokemon) => prev + "," + pokemon);
    poke = pokest;
  }

  return <textarea value={poke} className="textarea" disabled />;
}
