function Button({ children, style, onClickHandler }) {
  return (
    <button className={'button ' + style} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
