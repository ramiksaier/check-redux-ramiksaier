import "./App.css";
import Taskslist from "./Taskslist";
import { Route, Switch } from "react-router-dom";
import Firstpage from "./Component/Firstpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Firstpage} />
        <Route path="/listtask" component={Taskslist} />
      </Switch>
    </div>
  );
}

export default App;
