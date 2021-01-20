import './App.css';
import ContactApp from "./components/contact-app/ContactApp";
import {Provider} from 'react-redux';
import {mainStore} from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={mainStore}>
         <ContactApp/>
      </Provider>
    </div>
  );
}

export default App;
