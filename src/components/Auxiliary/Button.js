const Button = ({ buttonText, children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {buttonText || children}
  </button>
);

export default Button;
