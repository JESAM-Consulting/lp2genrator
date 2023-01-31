import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import "./styles/mixins/global.scss";
import Footer from "./components/home/footer";
import Header from "./components/home/header";
import FinancialGuide from "./components/financialGuide";
import Cookies from "./components/cookies";
import Steper from "./components/steper";

function RouteWrapper({
  component: Component,
  layout: Layout,
  auth,
  ...rest
}) {
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
  return (
    <>
      <Router>
        {cookieModal && <Cookies onClose={onClose} />}
        <RouteWrapper exact path="/" component={FinancialGuide} layout={DefaultLayoutMain}/>
        <RouteWrapper exact path="/steper" component={Steper} layout={DefaultLayout} />
      </Router>
    </>
  );
}


const DefaultLayout = ({ children, match }) => <>{children}</>;
const DefaultLayoutMain = ({ children, match }) => (
  <>
    <Header />
    {children}
    <Footer />
    </>
);

export default App;
