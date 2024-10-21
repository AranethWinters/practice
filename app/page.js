import Image from "next/image";
import {HomePage} from "./home/page.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import homestyle from "@/app/style/homepage.module.css";
import NavBar from './component/NavBar.jsx';

export default function Home() {
  return (
    <div className={`${homestyle.pageContainer}`}>
      <NavBar/>
      <Header title="Welcome to My World"/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
