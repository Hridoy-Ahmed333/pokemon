import { useState } from "react";
import RenderTrainerList from "./RenderTrainerList";
export default function Battle({
  trainerList,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
  fighter1,
  setFighter1,
  fighter2,
  setFighter2,
  selectPokemon,
  setSelectPokemon,
  tookFighter1,
  setTookFighter1,
  tookFighter2,
  setTookFighter2,
}) {
  const [battle, setBattle] = useState(false);
  const [isOpenTrainer1, setIsOpenTrainer1] = useState(false);
  const [isOpenTrainer2, setIsOpenTrainer2] = useState(false);
  const [f1Pow, setF1Pow] = useState(0);
  const [f2Pow, setF2Pow] = useState(0);
  const [isFighting, setIsFighting] = useState(false);

  function arrCalc(arr) {
    if (arr?.length > 0) {
      const total = arr?.reduce((pre, el) => pre + el);
      return total;
    }
  }

  function extractPower(obj) {
    const obje = obj?.map((el) => el?.power);
    return obje;
  }

  function fightp(e) {
    e.preventDefault();
    const pow1 = extractPower(fighter1.fightingPokemon);
    const f1 = arrCalc(pow1);
    setF1Pow(f1);
    const pow2 = extractPower(fighter2.fightingPokemon);
    const f2 = arrCalc(pow2);
    setF2Pow(f2);
    setIsFighting(true);
  }
  return (
    <div>
      <div className="fourth-component">
        <div className="fourth-component-item1">
          <button className="button" onClick={(e) => setBattle(!battle)}>
            Start The battle
          </button>
        </div>
        {battle && (
          <div className="fourth-component-item2">
            <div className="fourth-component-item2-part1">
              <RenderTrainerList
                trainerList={trainerList}
                player={player1}
                setPlayer={setPlayer1}
                fighter={fighter1}
                setFighter={setFighter1}
                selectPokemon={selectPokemon}
                setSelectPokemon={setSelectPokemon}
                tookFighter={tookFighter1}
                setTookFighter={setTookFighter1}
                isOpenTrainer={isOpenTrainer1}
                setIsOpenTrainer={setIsOpenTrainer1}
              />
            </div>
            <div className="fourth-component-item2-part2">
              <RenderTrainerList
                trainerList={trainerList}
                player={player2}
                setPlayer={setPlayer2}
                fighter={fighter2}
                setFighter={setFighter2}
                selectPokemon={selectPokemon}
                setSelectPokemon={setSelectPokemon}
                tookFighter={tookFighter2}
                setTookFighter={setTookFighter2}
                isOpenTrainer={isOpenTrainer2}
                setIsOpenTrainer={setIsOpenTrainer2}
              />
            </div>
          </div>
        )}
        <div className="fourth-component-item3">
          <div>{isOpenTrainer1 && <RenderPlayerCard fighter={fighter1} />}</div>

          <div>{isOpenTrainer2 && <RenderPlayerCard fighter={fighter2} />}</div>
        </div>

        {isOpenTrainer1 && isOpenTrainer2 && (
          <div className="fourth-component-item1">
            <button className="button" onClick={(e) => fightp(e)}>
              <h3>Fight!!!!!</h3>
            </button>
          </div>
        )}
        {isFighting && (
          <Winner
            f1Pow={f1Pow}
            f2Pow={f2Pow}
            fighter1={fighter1}
            fighter2={fighter2}
          />
        )}
      </div>
    </div>
  );
}

function RenderPlayerCard({ fighter }) {
  return (
    <div>
      <div className="fourth-component-item3-part1">
        <div className="fourth-component-item3-part1-box1">
          <h3>{fighter?.name}</h3>
        </div>
        <div className="fourth-component-item3-part1-box2">
          <img src={fighter?.image} alt="lol" />
        </div>
        <div>
          <FightingPokemon poks={fighter.fightingPokemon} />
        </div>
      </div>
    </div>
  );
}

function FightingPokemon({ poks }) {
  return (
    <div className="fourth-component-players">
      <div className="select-pokemon-text2">
        <h3>Pokemons</h3>
      </div>
      <div className="second-side-bar2">
        {poks?.map((pok, index) => (
          <span key={index}>{pok.name}</span>
        ))}
      </div>
    </div>
  );
}

function Winner({ f1Pow, f2Pow, fighter1, fighter2 }) {
  let winner;
  let points;
  if (f1Pow > f2Pow) {
    winner = fighter1.name;
    points = f1Pow - f2Pow;
  }
  if (f1Pow < f2Pow) {
    winner = fighter2.name;
    points = f2Pow = f1Pow;
  }
  return (
    <div>
      <div className="fourth-component-item4">
        <h3>
          The Winner is {winner} with {points} points
        </h3>
      </div>
    </div>
  );
}
