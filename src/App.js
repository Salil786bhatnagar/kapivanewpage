import './Coustom.css';
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import NoteState from './context/notes/NoteState';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/Index';
import MainPage from './components/MainPage';
function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
       
        <Route
            exact
            path="/MainPage"
            component={MainPage}
           />

          <Route
            exact
            path="/"
            component={Index}
           />  

           <Route
            exact
            path="/Home"
            component={Home}
           />

           <Route
            exact
            path="/Aboutus"
            component={Aboutus}
           />

            {/* <Route
            exact
            path="/Navbar"
            component={Navbar}
           />
   */}
        </Router>  
      </NoteState>
    </div>
  );
}

export default App;
