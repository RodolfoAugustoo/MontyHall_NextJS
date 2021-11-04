import styles from "../../styles/door.module.css";
import DoorModel from "../../model/door";
import Gift from '../gift'

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door?.selected && !door.isOpen ? styles.selected : "";

  function handleClick(e) {
    props.onChange(door.changeSelection());
  }

  function openTheDoor(e){
    e.stopPropagation()
    props.onChange(door.openTheDoor())
  }

  return (
    <div className={styles.square} onClick={handleClick}>
      <div className={`${styles.flap} ${selected}`}>
        {door.isClosed ? (
          <div className={styles.door}>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.pull} onClick={openTheDoor}></div>
          </div>
        ): 
          door.hasGift ? <Gift/> : null
        }
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}
