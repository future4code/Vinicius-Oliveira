import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}

// export class IconeComContador extends Component {
// 	state = {
// 		comentario:''
// 	}

// 	onChangeComentario = (event) => {
// 		this.setState({comentario:event.target.value})
// 	}

// 	render() {
// 		return <CommentContainer>
// 			<InputComentario
// 				placeholder={'Comentário'}
// 				value={this.state.comentario}
// 				onChange={this.onChangeComentario}
// 			/>
// 			<button onClick={this.props.aoEnviar}>Enviar</button>
// 		</CommentContainer>
// 	}
// }
