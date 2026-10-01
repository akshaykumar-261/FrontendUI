function Button({ children, onClick, className, type = "button" }) {
  return (
    <button onClick={onClick} type={type} className={`${className || 'bg-amber-300'}`}>
      {children}
    </button>
  );
}
export default Button;