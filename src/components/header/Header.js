import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "gradient-one"
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <>
      <header className="header-container">
        <div className="header-title">
          <h1>NoteHack</h1>
        </div>

        <div className="header-theme-selector">
          <span
            className={
              theme === "gradient-one"
                ? "gradient-one active-theme"
                : "gradient-one"
            }
            onClick={() => setTheme("gradient-one")}
          ></span>
          <span
            className={
              theme === "gradient-two"
                ? "gradient-two active-theme"
                : "gradient-two"
            }
            onClick={() => setTheme("gradient-two")}
          ></span>
          <span
            className={
              theme === "gradient-three"
                ? "gradient-three active-theme"
                : "gradient-three"
            }
            onClick={() => setTheme("gradient-three")}
          ></span>
          <span
            className={
              theme === "gradient-four"
                ? "gradient-four active-theme"
                : "gradient-four"
            }
            onClick={() => setTheme("gradient-four")}
          ></span>
          <span
            className={
              theme === "gradient-five"
                ? "gradient-five active-theme"
                : "gradient-five"
            }
            onClick={() => setTheme("gradient-five")}
          ></span>
          <span
            className={
              theme === "gradient-six"
                ? "gradient-six active-theme"
                : "gradient-six"
            }
            onClick={() => setTheme("gradient-six")}
          ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
