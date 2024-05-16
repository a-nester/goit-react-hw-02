import css from "./Button.module.css";

export const Button = ({ children }) => {
  return <button className={css.btn}>{children}</button>;
};

export default Button;
