import styles from "../styles/roomselector.module.css";

export const RoomSelector = ({ setCurrentRoom }) => {
  function handleSubmit(event) {
    setCurrentRoom(event);
  }
  return (
    <div className={styles.container}>
      <button
        onClick={(event) => {
          handleSubmit(event.target.value);
        }}
        value="Living Room"
      >
        Living Room
      </button>
      <button
        onClick={(event) => {
          handleSubmit(event.target.value);
        }}
        value="Kitchen"
      >
        Kitchen
      </button>
      <button
        onClick={(event) => {
          handleSubmit(event.target.value);
        }}
        value="Bathroom"
      >
        Bathroom
      </button>
    </div>
  );
};
