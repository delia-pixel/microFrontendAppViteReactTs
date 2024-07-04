import logo from "../assets/logo.png";
import iconButton from "../assets/icon-button.png";

export default function Header() {
  return (
    <header className="flex flex-col justify-center h-28 w-full">
      <div className="flex justify-between items-center mx-24">
        <div className="w-44 h-28 flex flex-shrink-0 items-center">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="w-44 h-28 flex flex-shrink-0 items-center">
          <img src={iconButton} alt="Sign in" />
        </div>
      </div>
    </header>
  );
}
