export default function RenderTrainerList({
  trainerList,
  player,
  setPlayer,
  fighter,
  setFighter,
  selectPokemon,
  setSelectPokemon,
  tookFighter,
  setTookFighter,

  isOpenTrainer,
  setIsOpenTrainer,
}) {
  function chooseFighter(e) {
    e.preventDefault();
    setFighter(player);
    setSelectPokemon(!selectPokemon);
    setIsOpenTrainer(true);
  }
  return (
    <div className="fourth-component-players">
      <div className="select-pokemon-text2">
        <h3>Select Player</h3>
      </div>
      <div className="second-side-bar2">
        {trainerList.map((trainer) => (
          <Trainer
            trainer={trainer}
            setPlayer={setPlayer}
            player={player}
            key={trainer.id}
          />
        ))}
      </div>
      <div className="choose-pokemon2">
        <button className="button" onClick={(e) => chooseFighter(e)}>
          Choose Player
        </button>
      </div>
    </div>
  );
}

function Trainer({ trainer, player, setPlayer }) {
  function handleClick(e) {
    e.preventDefault();
    setPlayer(trainer);
  }
  return <span onClick={(e) => handleClick(e)}>{trainer.name}</span>;
}
