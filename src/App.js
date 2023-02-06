import React, { useState } from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/mixins/global.scss";
import Footer from "./components/home/footer";
import Header from "./components/home/header";
import FinancialGuide from "./components/financialGuide";
import Cookies from "./components/cookies";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Form from "./components/form";
import Confirm from "./components/confirm";

export const dataStepContext = React.createContext(null);

function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function App() {
  const [cookieModal, setCookieModal] = React.useState(false);
  React.useEffect(() => {
    let cookieData = localStorage.getItem("cookie");
    if (cookieData) {
      cookieData = JSON.parse(cookieData);
      setCookieModal(cookieData?.cookie ? false : true);
    } else {
      setCookieModal(true);
    }
  }, []);

  const onClose = () => {
    setCookieModal(false);
    localStorage.setItem("cookie", JSON.stringify({ cookie: true }));
  };

  const [stepper, setStepper] = useState({
    firstStepper: "",
    secondStepper: "",
    ThirdStepper: "",
    forthStepper: "",
  });

  const [tabview, setTabview] = useState("first");

  return (
    <dataStepContext.Provider
      value={{
        stepper: stepper,
        setStepper: setStepper,
        tabview: tabview,
        setTabview: setTabview,
      }}>
      <Router>
        {cookieModal && <Cookies onClose={onClose} />}
        <RouteWrapper
          exact
          path="/"
          component={FinancialGuide}
          layout={DefaultLayoutMain}
        />
        <RouteWrapper
          exact
          path="/steper1"
          component={Step1}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/steper2"
          component={Step2}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/steper3"
          component={Step3}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/form"
          component={Form}
          layout={DefaultLayout}
        />
        <RouteWrapper
          exact
          path="/corfirmscreen"
          component={Confirm}
          layout={DefaultLayout}
        />
      </Router>
    </dataStepContext.Provider>
  );
}

const DefaultLayout = ({ children, match }) => {
  return <>{children}</>;
};
const DefaultLayoutMain = ({ children, match }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default App;
