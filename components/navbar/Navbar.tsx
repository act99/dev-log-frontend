import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.jpg";
import styles from "../../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <div className="flex flex-row ml-40">
        <div className="flex flex-row">
          <Link href={"/"}>
            <a>
              <div className=" p-3">
                <Image src={logo} width={80} height={40} />
              </div>
            </a>
          </Link>
          <NavBtn text="home" />
          <NavBtn text="about" />
          <NavBtn text="categories" />
          <NavBtn text="projects" />
          <NavBtn text="tags" />
        </div>
      </div>
      <div className="flex">
        <NavBtn text="admin" />
      </div>
    </div>
  );
};

interface NavBtnProps {
  text: string;
}

const NavBtn: React.FC<NavBtnProps> = ({ text }) => {
  return (
    <Link href={text != "home" ? `/${text}` : "/"}>
      <a className={styles.categoryBtn}>
        <h3>{text[0].toUpperCase() + text.slice(1)}</h3>
      </a>
    </Link>
  );
};

export default Navbar;
