import styles from "./input.module.css";

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.id}>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
}
