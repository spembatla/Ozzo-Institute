import {BrowserRouter, Route , Routes} from "react-router-dom";
import './App.css';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Login } from "./components/login/login";
import { Admission } from "./components/admission/admission";
import { Contact } from "./components/contact/contact";
import { Pay } from "./components/online-payment/pay";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/online_payment" element={<Pay/>}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
