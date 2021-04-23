//import logo from './logo.svg';
import './styles/sass/App.scss';
import NavigationBar from './components/navbar.js';
import Prosidebar from './components/sidebar.js';
import { Content } from './components/content.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        
        <div className="content">
           
            <Prosidebar />
             <Content />
            
        </div>
      
      </header>
    </div>
  );
}

export default App;


