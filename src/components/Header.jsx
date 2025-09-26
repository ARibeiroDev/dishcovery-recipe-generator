import Logo from "../assets/recipe-icon_500x500.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center gap-2 min-h-20 shadow-[0_1px_3px_0_rgba(0,0,0)]">
      <img src={Logo} alt="Dishcovery Logo" width={65} height={65} />
      <h1>Dishcovery</h1>
    </header>
  );
};

export default Header;
