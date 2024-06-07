import style from "./Button.module.scss";
interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode; 
}


export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
