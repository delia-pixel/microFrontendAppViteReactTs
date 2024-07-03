import logo from "../assets/logo.png";
import iconButton from "../assets/icon-button.png";

export default function Header() {
  return (
    <div className="flex justify-center h-32 w-full bg-gradient-to-b from-black to-slate-300">
      <img src={logo} alt="logo" />

      <img src={iconButton} alt="Sign in" />
    </div>
  );
}
