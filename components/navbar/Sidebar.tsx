import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.jpg";
import styles from "../../styles/sidebar.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaReact } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" text-blue-200 w-80 p-5">
      <div className=" text-center font-extrabold text-xl">
        <Link href={"/"}>
          <a>
            <Image src={logo} />
          </a>
        </Link>

        <div className={styles.slider}>
          <div className="flex flex-col items-center my-10">
            <span className=" text-xs text-center ">
              문제를 해결하지 못하면
            </span>
            <span className="text-xs text-center mt-2">
              나는 바보이거나 노력을 안 한 것일 뿐이다.
            </span>
            <span className="text-xs text-center mt-2">- Wolfgang Haken -</span>
          </div>
          <div className={styles.detailList}>
            <FaReact size={23} />
            <span className=" ml-2">Frontend Dev</span>
          </div>
          <div className={styles.detailList}>
            <GoLocation size={23} />
            <span className=" ml-2">Seoul, Republic of Korea</span>
          </div>
          <div className={styles.detailList}>
            <MdOutlineMailOutline size={23} />
            <span className=" ml-2">dorxm999@gmail.com</span>
          </div>
          <a href={"https://github.com/act99"}>
            <div className={styles.detailList}>
              <AiFillGithub size={23} />
              <span className=" ml-2">https://github.com/act99</span>
            </div>
          </a>
          <div className={styles.postingRow}>
            <div className={styles.colCenter}>
              <h3 className={styles.h3}>포스트</h3>
              <h1 className={styles.h1}>450</h1>
            </div>
            <div>
              <h3 className={styles.h3}>카테고리</h3>
              <h1 className={styles.h1}>450</h1>
            </div>
            <div>
              <h3 className={styles.h3}>태그</h3>
              <h1 className={styles.h1}>450</h1>
            </div>
          </div>
          <div className={styles.categoryDiv}>
            <h3>카테고리</h3>
            <ul className={styles.categoryUl}>
              <li className={styles.categories}>
                <h5>aws</h5>
                <h5>34</h5>
              </li>
              <li className={styles.categories}>
                <h5>aws</h5>
                <h5>34</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
