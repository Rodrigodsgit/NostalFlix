import React from 'react';
import Menu from './componentes/Menu'
import BannerMain from './componentes/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Caroseul from './componentes/Carousel';
import Footer from './componentes/Footer';


function App() {
  return (
    <div style= {{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Sim, são 10 horas de vídeo, eu não sabia qual vídeo colocar aqui então peguei o mais aleatório possível."}
      />

      <Caroseul
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />

      <Caroseul
        category = {dadosIniciais.categorias[1]}
      />

      <Caroseul
        category = {dadosIniciais.categorias[2]}
      />

      <Caroseul
        category = {dadosIniciais.categorias[3]}
      />  

      <Caroseul
        category = {dadosIniciais.categorias[4]}
      />

      <Caroseul
        category = {dadosIniciais.categorias[5]}
      />

    </div>
  );
}

export default App;

