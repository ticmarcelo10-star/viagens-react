import { useState } from 'react';
import { viagens } from './viagens';
import CartaoViagem from './CartaoViagem';

export default function Catalogo() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todas');

  const categorias = ['Todas', 'Cidade', 'Natureza', 'Praia'];

  // Filtra comparando a propriedade 'tipo' com o filtro ativo
  const viagensFiltradas = viagens.filter((viagem) => {
    if (filtroAtivo === 'Todas') return true;
    return viagem.tipo === filtroAtivo;
  });

  return (
    <section className="catalogo" id="destinos" aria-labelledby="titulo-destinos">
      <div className="topo-secao">
        <div>
          <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
          <h2 id="titulo-destinos">Destinos para descobrir</h2>
        </div>
        <p className="contagem">
          {viagensFiltradas.length} {viagensFiltradas.length === 1 ? 'viagem' : 'viagens'}
        </p>
      </div>

      <div className="barra-filtros" role="group" aria-label="Filtrar viagens por tipo">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`filtro ${filtroAtivo === categoria ? 'filtro--ativo' : ''}`}
            aria-pressed={filtroAtivo === categoria}
            onClick={() => setFiltroAtivo(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="grelha">
        {viagensFiltradas.map((viagem) => (
          <CartaoViagem key={viagem.id} viagem={viagem} />
        ))}
      </div>
    </section>
  );
}