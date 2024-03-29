// import "./header.css";
// import { Outlet } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const [darkTheme, setDarkTheme] = useState("false");

//   const handleTheme = () => {
//     setDarkTheme(!darkTheme);

//     let mainContainer = document.querySelector(".main-container");
//     mainContainer.classList.toggle("dark");
//   };
//   return (
//     <>
//       <header className="header">
//         <h1>Where in the world?</h1>
//         {darkTheme ? (
//           <div className="theme-light hidden" onClick={handleTheme}>
//             <i className="fa-solid fa-moon"></i>
//             <p>Dark Theme</p>
//           </div>
//         ) : (
//           <div className="theme-dark" onClick={handleTheme}>
//             <i className="fa-solid fa-sun"></i>
//             <p>Light Theme</p>
//           </div>
//         )}
//       </header>
//       <Outlet />
//     </>
//   );
// };

// export default Header;

import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <header className={`header ${darkTheme ? "dark" : ""}`}>
        <h1>Where in the world?</h1>
        <div
          className={`theme-toggle ${darkTheme ? "theme-light" : "theme-dark"}`}
          onClick={handleTheme}
        >
          <i className={`fa-solid ${darkTheme ? "fa-moon" : "fa-sun"}`}></i>
          <p>{darkTheme ? "Dark Theme" : "Light Theme"}</p>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
