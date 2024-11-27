import "../styles/Header.css";
import logo from "../assets/ChefClaudeIcon.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>Chef Claude</h1>
    </div>
  );
}

export default Header;
