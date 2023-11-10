import Formcheck from './components/usernameform/formcheck';
import './App.css';
import BodyLayout from './components/layout/bodyLayout';
function App() {

  return (
    <div className="App">
      {/* Form check is username is set or not*/}
      <Formcheck/>
      {/* Body layout file */}
      <BodyLayout/>

    </div>
  );
}

export default App;
