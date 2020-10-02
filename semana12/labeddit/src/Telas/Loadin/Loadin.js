import React from 'react';
import styled from 'styled-components'
import Load from '../../Arquivos/loading.gif'



const Tela = styled.div`

`

const Loadin = (props) => {


return(
    <Tela>
        <Loadin alt={"Load"} src={Load} />
    </Tela>
);
}

export default Loadin;