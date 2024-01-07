export default function TrainerDetails({
  selectTrainerDetails,
  setSelectTrainerDetails,
  showForm,
  handleForm,
}) {
  function clickHandle(e) {
    e.preventDefault();
    setSelectTrainerDetails({});
    handleForm(showForm);
  }
  return (
    <div>
      <div className="second-component">
        <div className="second-component-item1">
          <img src={selectTrainerDetails?.image} alt="lol" />
        </div>
        <div className="second-component-item2">
          <div className="name">
            <h3>{selectTrainerDetails?.name}</h3>
          </div>
          <div className="description">
            <p> {selectTrainerDetails?.description}</p>
          </div>
          <div className="finBut">
            <button className="button" onClick={(e) => clickHandle(e)}>
              Close
            </button>
          </div>
        </div>
        <div className="second-component-item3">
          <div className="name2">
            <h3>{selectTrainerDetails?.name}'s' Pokemons</h3>
          </div>
          <div className="poke-comp">
            {selectTrainerDetails?.pokemon?.map((pokemon) => (
              <Pokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pokemon({ pokemon }) {
  return <span>{pokemon.name}</span>;
}
