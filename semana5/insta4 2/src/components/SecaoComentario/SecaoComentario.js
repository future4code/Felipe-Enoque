import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valor: ""

	}

	onChangeComentario = (event) => {

	this.setState({
			valor: event.target.value
		})
	}

	render() {

		console.log(this.state.valor)

		return <div className={'comment-container'}>
			<input
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={this.state.comentario}
					onChange={this.onChangeComentario}
				/>

				<button onClick={this.props.aoEnviar}>Enviar</button>
			</div>
	}
}
