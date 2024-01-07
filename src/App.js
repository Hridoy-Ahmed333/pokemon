import Trainers from "./Trainers";
import SelectPokemon from "./SelectPokemon";
import TrainerDetails from "./TrainerDetails";
import AddTrainer from "./AddTrainer";
import Battle from "./Battle";
import { useState } from "react";

const trainers = [];

const pokemonArray = [
  { name: "Bulbasaur", power: 5 },
  { name: "Charmander", power: 6 },
  { name: "Squirtle", power: 5 },
  { name: "Pikachu", power: 7 },
  { name: "Eevee", power: 4 },
  { name: "Jigglypuff", power: 3 },
  { name: "Mewtwo", power: 10 },
  { name: "Gengar", power: 8 },
  { name: "Snorlax", power: 9 },
  { name: "Lapras", power: 7 },
  { name: "Gyarados", power: 8 },
  { name: "Dragonite", power: 9 },
  { name: "Machamp", power: 7 },
  { name: "Alakazam", power: 8 },
  { name: "Golem", power: 6 },
  { name: "Arcanine", power: 7 },
  { name: "Vaporeon", power: 6 },
  { name: "Flareon", power: 6 },
  { name: "Jolteon", power: 6 },
  { name: "Ditto", power: 2 },
  { name: "Nidoking", power: 7 },
  { name: "Venusaur", power: 8 },
  { name: "Blastoise", power: 8 },
  { name: "Charizard", power: 8 },
  { name: "Mew", power: 10 },
  { name: "Lugia", power: 10 },
  { name: "Ho-Oh", power: 10 },
  { name: "Rayquaza", power: 10 },
  { name: "Kyogre", power: 10 },
  { name: "Groudon", power: 10 },
];

export default function App() {
  return <Game />;
}
function Game() {
  const [selectTrainerDetails, setSelectTrainerDetails] = useState(null);
  const [detailForm, setDetailForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [trainerList, setTrainerList] = useState(trainers);
  const [showAddTrainer, setShowAddTrainer] = useState(false);
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [selectPokemon, setSelectPokemon] = useState(false);
  const [figter1, setFighter1] = useState({});
  const [figter2, setFighter2] = useState({});
  const [tookFighter1, setTookFighter1] = useState(false);
  const [tookFighter2, setTookFighter2] = useState(false);
  function selectTrainer(trainer) {
    setSelectTrainerDetails(trainer);
  }
  function handleDetailForm(trainer) {
    setDetailForm(!detailForm);
    // let keys = Object.keys(detailForm);
    // keys.forEach((key) => {
    //   if (trainerId !== key) detailForm[key] = false;
    //   if (trainerId === key && detailForm[key] === true)
    //     detailForm[key] = false;
    // });
    // setDetailForm((prevState) => ({
    //   ...prevState,
    //   [trainerId]: !prevState[trainerId],
    // }));
  }
  function handleForm(value) {
    setShowForm(!value);
  }

  function onTrainerAdd(trainer) {
    setTrainerList([...trainerList, trainer]);
  }

  //console.log(detailForm);
  return (
    <div className="container">
      <div className="first-component ">
        <div className="first-component-item1">
          <div className="sidebar">
            <Trainers
              trainers={trainerList}
              selectTrainer={selectTrainer}
              handleDetailForm={handleDetailForm}
              detailForm={detailForm}
              selectTrainerDetails={selectTrainerDetails}
              setSelectTrainerDetails={setSelectTrainerDetails}
              handleForm={handleForm}
              showForm={showForm}
              showAddTrainer={showAddTrainer}
              setShowAddTrainer={setShowAddTrainer}
            />
          </div>
          <div></div>
        </div>
        {figter1 && figter2 && (
          <SelectPokemon
            pokemonArray={pokemonArray}
            selectPokemon={selectPokemon}
            setSelectPokemon={setSelectPokemon}
            fighter1={figter1}
            fighter2={figter2}
            tookFighter1={tookFighter1}
            setTookFighter1={setTookFighter2}
            tookFighter2={tookFighter2}
            setTookFighter2={setTookFighter2}
            setFighter1={setFighter1}
            setFighter2={setFighter2}
          />
        )}
      </div>
      {showForm && (
        <TrainerDetails
          selectTrainerDetails={selectTrainerDetails}
          setSelectTrainerDetails={setSelectTrainerDetails}
          handleForm={handleForm}
          showForm={showForm}
        />
      )}
      {showAddTrainer && (
        <AddTrainer
          pokemonArray={pokemonArray}
          onTrainerAdd={onTrainerAdd}
          showAddTrainer={showAddTrainer}
          setShowAddTrainer={setShowAddTrainer}
        />
      )}

      <Battle
        trainerList={trainerList}
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
        fighter1={figter1}
        setFighter1={setFighter1}
        fighter2={figter2}
        setFighter2={setFighter2}
        selectPokemon={selectPokemon}
        setSelectPokemon={setSelectPokemon}
        tookFighter1={tookFighter1}
        setTookFighter1={setTookFighter1}
        tookFighter2={tookFighter2}
        setTookFighter2={setTookFighter2}
      />
    </div>
  );
}
