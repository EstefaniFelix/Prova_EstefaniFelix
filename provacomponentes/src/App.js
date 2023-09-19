import './App.css';
import Noticia from './componentes/noticia';
import Categoria from './componentes/categoria';


function App() {
  return (
    <div className="Container">



      <Noticia nomenot="Thiago Oliveira estreia série de bate-papos com mães famosas sobre maternidade e autocuidado"
        noticia="Difícil encontrar mãe ou pai que não concorde: a chegada de uma criança vira a rotina de ponta-cabeça, sobretudo um bebê. “Mas a vida é melhor de cabeça pra baixo”, acredita a musicista Lan Lanh, esposa da atriz Nanda Costa e mãe das gêmeas Kim e Tiê, prestes a completar 2 anos.
 Para Lan Lanh, é como em um voo de avião:Primeiro, a máscara de oxigênio em você, pra depois salvar o bebê. A gente precisa também saber se cuidar. Na época da privação de sono, eu e Nanda quase enlouquecemos.Marina Santa Helena, apresentadora, podcaster e consultora de moda, apostou desde o começo na independência da filha, hoje com 5 anos.
 Marina deixava Teresa dormir na casa da tia, viajava um fim de semana só com o marido, o músico Emicida, mas admite que encontrar o equilíbrio é complicado: “Chega uma hora em que você está tão perdida e estressada que não consegue cuidar da criança, nem de mais nada.”
 Filho na escola foi um “grito de sobrevivência” para Bela Reis
 A jornalista e podcaster Bela Reis passou o primeiro ano com Martin, de dois anos e oito meses, em casa. “Quando a gente o botou na escola, foi meu grito de sobrevivência. Quando Martin está na escola sou só profissional, quando está comigo, sou mãe, e quando dorme, sou um pouco ‘ser humano eu’ e me recomponho pro dia seguinte.”
 " />

      <Categoria categoria="Filme" />
    </div>
  );
}

export default App;