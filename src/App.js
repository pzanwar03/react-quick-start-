import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";
import Home from "./containers/Home";
import Loading from "./components/Loading";

function App(props) {
  const { loading } = props;
  return (
    <>
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} />

        <PublicRoute path="*">
          <p>Page not found</p>
        </PublicRoute>
      </Switch>
    </Router>
    <Loading loading={loading} />
    </>
  );
}

export default App;
