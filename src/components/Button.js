const Button = ({ buttonText, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {buttonText}
  </button>
);

export default Button;
