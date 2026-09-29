import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import Rodape from './components/Rodape';
import './index.css';
import './App.css';

export default function App() {
  return (
    <div className="pagina" id="inicio">
      <Cabecalho />
      <Hero />
      <main>
        <Catalogo />
      </main>
      <Rodape />
    </div>
  );
}