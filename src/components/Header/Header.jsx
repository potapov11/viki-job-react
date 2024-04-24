import Input from "../Input-search/Input";
import "./Header.css";

import logoTiny from "../../assets/img/logo_tiny.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="../../../index.html">
          <img src={logoTiny} alt="logo" />
        </a>
      </div>
      <div className="header__rigth-side">
        <nav className="header__nav">
          <div className="header__links">
            <a href="http://">Ссылка 1</a>
            <a href="http://">Ссылка 2</a>
            <a href="http://">Ссылка 3</a>
          </div>
          <Input />
        </nav>
        <span>Константин Константинович</span>
      </div>
    </header>
  );
}

export default Header;
