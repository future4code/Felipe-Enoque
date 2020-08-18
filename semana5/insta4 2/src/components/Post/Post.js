import React from 'react'
import './Post.css' 

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {//Está sendo usada no console
    console.log('Curtiu!')

    if(this.state.curtido === true){
      this.setState({ curtido: false })
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    }else if (this.state.curtido === false) {
      this.setState({ curtido: true})
    }
    }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {//soma 1 no objeto acima
    this.setState({
      comentando: false,
     // numeroComentarios: this.state.numeroComentarios + 1
    })

    if(this.state.comentando === true){
      this.setState({ comentando: false })
      this.setState({numeroComentarios: this.state.numeroComentarios + 1})
    }else if (this.state.comentando === false) {
      this.setState({ comentando: true})
    }
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}///O coração que mostra se o usuario curtil ou não; ///Vem da condicional no inicio do render;//Vai pro prop no IconeComContadorjs
          onClickIcone={this.onClickCurtida}//Um aviso caso o usuario click em curtir;//Vem de um evento onclick mais acima;//Vai pro prop no IconeComContadorjs
          valorContador={this.state.numeroCurtidas}//O numeros de curtidas que recebeu o post;//Vem de um objeto;//Vai pro prop no IconeComContadorjs
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post