import { useState } from "react";

export default function SelectPokemon({
  pokemonArray,
  selectPokemon,
  setSelectPokemon,
  fighter1,
  tookFighter1,
  setTookFighter1,
  fighter2,
  tookFighter2,
  setTookFighter2,
  setFighter1,
  setFighter2,
}) {
  //setTookFighter(!tookFighter);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  let value1 = "";
  const pokeNameArr1 = arr1?.map((el) => el.name);
  if (pokeNameArr1.length > 0) {
    value1 = pokeNameArr1?.reduce((pre, el) => `${pre}, ${el}`);
  }

  let value2 = "";
  const pokeNameArr2 = arr2?.map((el) => el.name);
  if (pokeNameArr2.length > 0) {
    value2 = pokeNameArr2?.reduce((pre, el) => `${pre}, ${el}`);
  }

  function handleFightingPokemon1(e) {
    e.preventDefault();
    setFighter1({ ...fighter1, fightingPokemon: arr1 });
  }

  function handleFightingPokemon2(e) {
    e.preventDefault();
    setFighter2({ ...fighter2, fightingPokemon: arr2 });
  }
  return (
    <div className="first-component-item2">
      <div className="select-pokemon-text">
        <h3>Select Pokemon</h3>
      </div>
      <div className="second-side-bar">
        {fighter1?.pokemon?.map((pokemon) => (
          <DisplayPokemon
            pokemon={pokemon}
            key={pokemon.name}
            arr={arr1}
            setArr={setArr1}
          />
        ))}
      </div>
      <textarea
        value={value1}
        disabled
        //value={arr2?.map((el) => el?.name).reduce((prev, el) => prev + " " + el)}
      />
      <div className="choose-pokemon">
        <button className="button" onClick={(e) => handleFightingPokemon1(e)}>
          Choose
        </button>
      </div>
      <div className="second-side-bar">
        {fighter2?.pokemon?.map((pokemon) => (
          <DisplayPokemon
            pokemon={pokemon}
            key={pokemon.name}
            arr={arr2}
            setArr={setArr2}
          />
        ))}
      </div>
      <textarea
        disabled
        value={value2}
        //value={arr2?.map((el) => el?.name).reduce((prev, el) => prev + " " + el)}
      />
      <div className="choose-pokemon">
        <button className="button" onClick={(e) => handleFightingPokemon2(e)}>
          Choose
        </button>
      </div>
    </div>
  );
}

function DisplayPokemon({ pokemon, arr, setArr }) {
  function handleClick(e) {
    e.preventDefault();
    if (arr.length >= 6) {
      alert("You cant have more then 6 pokemon");
      return;
    }
    setArr([...arr, pokemon]);

    // if (arr.length < 6) {
    //   setArr(pokemon.name);
    //   console.log(arr);
    // }
    // if (arr.length >= 6) {
    //   alert("You can not have more then 6 pokemon");
    // }
  }

  return <span onClick={(e) => handleClick(e)}>{pokemon.name}</span>;
}
