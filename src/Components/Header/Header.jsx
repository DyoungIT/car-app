import style from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className={style.container}>
      <div>
        <Link to="/"><img src="logo.svg" width={50} height={50}/></Link>
      </div>
      <div>
        <Link to="/catalog">Каталог</Link>
      </div>
      <div>
        <Link to="/about">О компании</Link>
      </div>
      <div>
        <Link to="/contacts">Контакты</Link>
      </div>
    </nav>
  );
}
