const Button = ({ textContent, ariaLabel, onClick }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="min-w-12 text-base bg-[#EB5E28] text-[#252422] p-3 rounded cursor-pointer transition-colors hover:bg-[#ff4800] dark:text-[#FFFCF2] outline-none"
    >
      {textContent}
    </button>
  );
};

export default Button;
