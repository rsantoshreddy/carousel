import './button.css';

const Button = (props) => {
  const { children, className = 'btn--outline', ...restProps } = props;
  return (
    <button {...restProps} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
