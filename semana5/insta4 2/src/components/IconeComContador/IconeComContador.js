import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {//organiza as informações pro post
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
