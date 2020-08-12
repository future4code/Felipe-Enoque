import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/me.jpg'
import foto2 from './img/comb.png'
import foto3 from './img/brasaoce.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Felipe Enoque de Souza Vieira" 
          descricao="Oi, eu sou o Felipe Enoque de Souza Vieira. Sou Técnico de informática. Adoro trabalhar com suporte tecnico de tecnologia dentre as muitas áreas de tecnologia passei a reconhecer toda a importancia e toda a beleza da área de programação.Busco adentrar na área e me aventurar entendendo a limitação humana e como a tecnologia pode quebrar isso."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          nome="Email:" 
          descricao="Enoque599@gmail.com"
        />
      </div>


      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://img2.gratispng.com/20180712/ugv/kisspng-computer-icons-location-clip-art-pin-location-5b46f29b710431.0425317915313762834629.jpg"
          nome="Endereço:" 
          descricao="Rua Canário Belga, Nº: 5000"
          
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={foto2} 
          nome="Comercial Brasil Distribuidora" 
          descricao="estágio complementar na função de Suporte de Infraestrutura" 
        />
        
        <CardGrande 
          imagem={foto3} 
          nome="Governo do Estado do Ceará" 
          descricao="Supervisão em laboratório de informática escolar." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
