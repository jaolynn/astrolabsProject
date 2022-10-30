import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import UrgentAdopt from "./UrgentAdopt";
import LostNFound from "./LostNFound";
import UsefulContacts from "./UsefulContacts";
import RegistrationScreen from "./RegistrationScreen";

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/about" component={AboutScreen} exact={true} />
            <Route path="/urgentadopt" component={UrgentAdopt} exact={true} />
            <Route path="/lostandfound" component={LostNFound} exact={true} />
            <Route path="/usefulcontacts" component={UsefulContacts} exact={true} />
            <Route path="/registration" component={RegistrationScreen} exact={true} />
            
          </Switch>
      </BrowserRouter>
  );
}

export default App;