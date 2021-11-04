import styles from "../../styles/number-input.module.css";

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newNumber: number) => void;
}

export default function NumberInput(props: NumberInputProps) {
  const decrement = () => {
    props.onChange(props.value - 1);
  };

  const increment = () => {
    props.onChange(props.value + 1);
  };

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>
          -
        </button>
        <button className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
