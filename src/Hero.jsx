export default function Hero({ img }) {
    const costaVicentina = img
  return (
    <section className="hero" aria-labelledby="titulo-principal">
      <div className="hero-conteudo">
        <p className="sobre-titulo">VIAGENS EM PORTUGAL</p>
        <h1 id="titulo-principal">
          O próximo lugar fica mais perto do que pensas.
        </h1>
        <p className="hero-descricao">
          Três formas de sair da rotina. Encontra a viagem certa para ti.
        </p>
        <a className="botao-destaque" href="#destinos">
          Ver destinos <span aria-hidden="true">↗</span>
        </a>
      </div>
      <img
        className="hero-imagem"
        src={costaVicentina}
        alt="Costa atlântica portuguesa ao pôr do sol"
      />
    </section>
  );
}
