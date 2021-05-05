import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './containers/About'
import RegistrationForm  from './containers/Login-Form/Login'
import Routes from "./Routes";
import {PostsList} from './containers/Login-Form/Shoeuserdata'
export default function App() {
  return (
<div>
<RegistrationForm />
   <PostsList />
   </div>

  );
}

/*
 <Router>
      <div>
        <button><Link to="/about">Home</Link></button>
        <hr />
        <Routes />
      </div>
       </Router>
    

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About1() {
  return (
    <div>
<h1>About</h1>
    </div>
  );
}  */