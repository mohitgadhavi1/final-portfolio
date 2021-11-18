import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import WorkPage from "./Pages/WorkPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch as Switching } from "react-router";
// import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <>
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content" onClick={themeToggler}>
            <Brightness4Icon />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switching>
          <Route path="/" exact>
            <HomePage onClick={() => setNavToggle(false)} />
          </Route>
          <Route path="/about" exact>
            <AboutPage onClick={() => setNavToggle(false)} />
          </Route>
          <Route path="/resume" exact>
            <ResumePage onClick={() => setNavToggle(false)} />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage onClick={() => setNavToggle(false)} />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage onClick={() => setNavToggle(false)} />
          </Route>
          <Route path="/contact" onClick={() => setNavToggle(false)} exact>
            <ContactPage />
          </Route>
          <Route path="/work" onClick={() => setNavToggle(false)} exact>
            <WorkPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    overflow: hidden;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      transform: rotate(-125deg);
    }
  }
`;

export default App;

{
  // const [checked, setChecked] = useState(false);
  /* <div className="right-content">
<Switch
  value=""
  checked={checked}
  inputProps={{ "aria-label": "" }}
  size="medium"
/>
</div> */
}
