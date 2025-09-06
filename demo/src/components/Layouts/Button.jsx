

const Button = ({ children, className}) => {
  return (
    <button
      className={`bg-white text-red-500 py-[13px] px-[30px] font-popins font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
