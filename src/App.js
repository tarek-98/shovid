import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="App col-12">
      <NavBar />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
