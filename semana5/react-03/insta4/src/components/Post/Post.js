import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
//Importando função com export NÃO DEFAULT

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
//Importando função com export NÃO DEFAULT

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
  }
  //Está somente mostrando "Curtiu!" no console.log, sem alterar o estado dela, repetindo quantas vezes o usuário clicar.

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  //Adiciona somente +1 no contado, porém atrelado somente ao botão "Enviar", usuário não consegue escrever no campo.

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

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador //Representa os respectivos parâmetros da "função" que serão aplicados com base nos contadores.
          icone={iconeCurtida} //{iconeCurtida} é baseado na declaração da variável dentro do render(), declarada como let iconeCurtida, possui saídas baseadas em if e else. Está somente mostrando "Curtiu!" no console.log, sem alterar o estado dela.
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador //Representa os respectivos parâmetros da "função" que serão aplicados com base nos contadores.
          icone={iconeComentario} //{iconeCurtida} é baseado na declaração da variável dentro do render(), declarada como let iconeCurtida, possui saídas baseadas em if e else. Está somente mostrando "Cutiu!" no console.log, sem alterar o estado dela.
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post