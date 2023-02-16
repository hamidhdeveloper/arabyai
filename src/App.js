import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import './index.css'

function App() {
  return <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        {/* <Route path="signup" element={ <SignUpModel /> } /> */}
    </Routes>    
    </div>
    </BrowserRouter>;
}

export default App;
