import Header from './componentes/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Header />}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
