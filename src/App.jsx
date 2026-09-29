import { useState } from "react";
import costaVicentina from "./assets/costa-vicentina.jpg";
import portoDouro from "./assets/porto-douro.jpg";
import serraEstrela from "./assets/serra-estrela.jpg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Catalogo from "./Catalogo";
import { viagens } from "./viagens";
import Footer from "./Footer";

function App() {
  const imgs = [portoDouro, serraEstrela, costaVicentina];
  for (let i = 0; i < viagens.length; i++) {
    Object.assign(viagens[i], { imagem: imgs[i] });
  }
  const [filtro, setFiltro] = useState(undefined);

  function filtrarPorTipo(tipo) {
    setFiltro((prev) => {
      return prev === tipo ? undefined : tipo;
    });
  }
  return (
    <div className="pagina" id="inicio">
      <Header />
      <Hero img={imgs[2]} />
      <main>
        <Catalogo
          imgs={imgs}
          viagens={viagens}
          filtrarPorTipo={filtrarPorTipo}
          filtro={filtro}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
