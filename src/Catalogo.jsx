import CartaoViagem from "./CartaoViagem";

export default function Catalogo({ viagens, filtrarPorTipo, filtro }) {
  const numViagens =
    filtro === "" || filtro === undefined
      ? viagens.length
      : viagens.filter((v) => v.tipo === filtro).length;

  return (
    <section
      className="catalogo"
      id="destinos"
      aria-labelledby="titulo-destinos"
    >
      <div className="topo-secao">
        <div>
          <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
          <h2 id="titulo-destinos">Destinos para descobrir</h2>
        </div>
        <p className="contagem">{numViagens} viagens</p>
      </div>
      <div
        className="barra-filtros"
        role="group"
        aria-label="Filtrar viagens por tipo"
      >
        <button
          className={
            filtro === undefined || filtro === ""
              ? "filtro filtro--ativo"
              : "filtro"
          }
          type="button"
          aria-pressed={
            filtro === undefined || filtro === "" ? "true" : "false"
          }
          onClick={() => filtrarPorTipo()}
        >
          Todas
        </button>
        <button
          className={filtro === "Cidade" ? "filtro filtro--ativo" : "filtro"}
          type="button"
          aria-pressed={filtro === "Cidade" ? "true" : "false"}
          onClick={() => filtrarPorTipo("Cidade")}
        >
          Cidade
        </button>
        <button
          className={filtro === "Natureza" ? "filtro filtro--ativo" : "filtro"}
          type="button"
          aria-pressed={filtro === "Natureza" ? "true" : "false"}
          onClick={() => filtrarPorTipo("Natureza")}
        >
          Natureza
        </button>
        <button
          className={filtro === "Praia" ? "filtro filtro--ativo" : "filtro"}
          type="button"
          aria-pressed={filtro === "Praia" ? "true" : "false"}
          onClick={() => filtrarPorTipo("Praia")}
        >
          Praia
        </button>
      </div>
      <div className="grelha">
        {viagens
          .filter((v) => !filtro || v.tipo === filtro)
          .map((v) => (
            <CartaoViagem viagem={v} key={v.id} />
          ))}
      </div>
    </section>
  );
}
