// HomePage.jsx

import { Link } from "react-router-dom";
import "./tailwind-local.css"; 
import styles from "./HomePage.module.css";
import bgImage from "../../assets/bgphone.jpg"; 

const HomePage = () => (
  <div
    className={`${styles.hero} hero min-h-screen`} 
    style={{
      backgroundImage: `url(${bgImage})`, 
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md mt-15">
        {" "}
        {}
        <h1 className="mb-5 text-5xl font-bold text-white">
          <br></br>
          Welcome to the Phonebook!
        </h1>
        <p className="mb-5 text-white text-lg">
          The best app, where you can manage <br></br> your contacts!
        </p>
        <Link to="/register">
          <button className={styles.getStartedButton}>
            {" "}
            {}
            Get started
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
