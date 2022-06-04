import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Details from "./components/Details/Details";
import "./App.css"



function App() {
  return (
    <BrowserRouter className="App">
        <Header />
        
        <Routes>
          <Route path="/" element= {<Main />}/>
          <Route path="/details" element= {<Details />}/>

        </Routes>
        
        
        
    </BrowserRouter>
  );
}

export default App;
