const Button = ({ buttonText, children, onClick, className, id }) => (
  <button onClick={onClick} className={className} id={id}>
    {buttonText || children}
  </button>
);

export default Button;
