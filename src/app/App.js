
import '../assets/css/App.css';

import Header from "./shared/Header";
import Footer from "./shared/Footer";

import Slider from "./sections/Slider";
import Sidebar from "./sections/Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider title="Bienvenido al Blog practico con React y NodeJS (Express)"></Slider>
      <div class="center">
        <section id="content">
          
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
