import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Dashboard";
import Drivers from "./Pages/Drivers";
import Vehicles from "./Pages/Vehicles";
import Accounts from "./Pages/Accounts";
import Settings from "./Pages/Settings";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, var(--primary) 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 1.3rem;
    background: linear-gradient(to right, var(--primary) 0%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }  
  
  h3 {
    font-size: 0.8rem;
    background: var(--grey);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/drivers" component={Drivers} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
