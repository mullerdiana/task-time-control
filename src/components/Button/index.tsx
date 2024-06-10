import style from "./Button.module.scss";

export function Button({
  type = "button",
  onClick,
  children,
}: {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button className={style.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
