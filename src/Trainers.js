export default function Trainers({
  trainers,
  selectTrainer,
  handleDetailForm,
  detailForm,
  selectTrainerDetails,
  setSelectTrainerDetails,
  showForm,
  handleForm,
  showAddTrainer,
  setShowAddTrainer,
  selectPokemon,
}) {
  function handleShowAddTrainer(e) {
    e.preventDefault();
    setShowAddTrainer(!showAddTrainer);
  }

  return (
    <ul>
      {trainers.map((trainer) => (
        <Trainer
          trainer={trainer}
          selectTrainer={selectTrainer}
          handleDetailForm={handleDetailForm}
          detailForm={detailForm}
          selectTrainerDetails={selectTrainerDetails}
          key={trainer.id}
          showForm={showForm}
          handleForm={handleForm}
          setSelectTrainerDetails={setSelectTrainerDetails}
        />
      ))}
      <button className="button" onClick={(e) => handleShowAddTrainer(e)}>
        {showAddTrainer ? "Close" : "Add Trainer"}
      </button>
    </ul>
  );
}
/*
function Trainer({ trainer, selectTrainer, handleDetailForm, detailForm }) {
  const [value, setValue] = useState(true);
  function handleSelectTrainer(e) {
    e.preventDefault();
    selectTrainer(trainer);
    handleDetailForm(trainer.id);
  }
  return (
    <li>
      <img src={trainer.image} alt="lol" />
      <h3>{trainer.name}</h3>
      <p>Hello I am {trainer.name}</p>
      <button className="button" onClick={(e) => handleSelectTrainer(e)}>
        {value ? "Trainer Details" : "close"}
      </button>
    </li>
  );
}
*/

function Trainer({
  trainer,
  selectTrainer,
  handleDetailForm,
  detailForm,
  selectTrainerDetails,
  showForm,
  handleForm,
  setSelectTrainerDetails,
}) {
  let isOpen = false;
  if (selectTrainerDetails?.id === trainer.id) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  function handleSelectTrainer(e) {
    e.preventDefault();
    selectTrainer(trainer);
    handleDetailForm(!detailForm);
    if (!isOpen) handleForm(showForm);
  }
  return (
    <li>
      <img src={trainer.image} alt="lol" />
      <h3>{trainer.name}</h3>
      <p>Hello I am {trainer.name}</p>
      <button className="button" onClick={(e) => handleSelectTrainer(e)}>
        {isOpen ? "close" : "Trainer Details"}
      </button>
    </li>
  );
}
