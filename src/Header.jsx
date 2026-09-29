export default function Header() {
  return (
    <header className="cabecalho">
      <a className="marca" href="#inicio">
        Rota Livre<span>.</span>
      </a>
      <nav className="menu" aria-label="Navegação principal">
        <a href="#destinos">Destinos</a>
        <a href="#sobre">Sobre</a>
      </nav>
      <a className="ligacao-cabecalho" href="#destinos">
        Explorar viagens
      </a>
    </header>
  );
}
