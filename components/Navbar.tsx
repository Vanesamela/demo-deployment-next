
import style from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/pricing", text: "Pricing" },
];

const Navbar = () => {
  return (
    <div>
      <nav className={style["menu-container"]}>
        {menuItems.map((item, index) => (
          <ActiveLink key={index} href={item.href} text={item.text} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
