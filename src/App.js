import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { ShopContextProvider } from "./context/shop-context";
import {Cart} from "./pages/cart/cart";
import {Shop} from "./pages/shop/shop";
import { Desc } from "./pages/shop/desc";
import "./App.css"


function App() {
  return (
    <div className="App"> 
    <ShopContextProvider>     
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Shop/>}/>
          <Route path="/cart" element={<Cart/>} />

          <Route path="/desc" element={<Desc/>} />
        </Routes>
          
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
