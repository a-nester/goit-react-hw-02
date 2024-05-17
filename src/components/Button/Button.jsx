import css from "./Button.module.css";

export const Button = ({ onUpdate, children }) => {
  return (
    <button className={css.btn} onClick={onUpdate}>
      {children}
    </button>
  );
};

export default Button;
