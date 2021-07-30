import { GlobalStyles } from './app.styled';
import Home from './Containers/Home';
import "./App.css";
import { ContextProvider } from './Context/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <GlobalStyles />
      <Home />
      </ContextProvider>
    </div>
  );
}

export default App;
