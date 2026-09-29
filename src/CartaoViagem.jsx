export default function CartaoViagem({ viagem }) {
    const { destino, tipo, duracao, preco, imagem } = viagem;
  return (
    <article className="cartao">
      <img
        className="imagem-viagem"
        src={imagem}
        alt="Vista do Porto e do Douro"
      />
      <div className="corpo-cartao">
        <span className="etiqueta">{tipo}</span>
        <h3>{destino}</h3>
        <p className="meta">
          {duracao} <span aria-hidden="true">·</span> Desde {preco}
        </p>
      </div>
    </article>
  );
}
