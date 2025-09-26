const Button = ({ textContent, ariaLabel, onClick, disabled }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={`min-w-12 text-base bg-[#EB5E28] text-[#252422] p-3 rounded  transition-colors  dark:text-[#FFFCF2] outline-none ${
        disabled ? "opacity-50" : "cursor-pointer hover:bg-[#ff4800]"
      }`}
    >
      {textContent}
    </button>
  );
};

export default Button;
