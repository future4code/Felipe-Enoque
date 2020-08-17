import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      <div className={'app-container'}>
        <Post
          nomeUsuario={'Ernesto'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1085239615689293825/XLmISw5p.jpg'}
          fotoPost={'https://i2.wp.com/media-cache-ak1.pinimg.com/736x/c8/91/c0/c891c0cae73e694394abefa8a00136ff.jpg'}
        />

      <div className={'app-container'}>
        <Post
          nomeUsuario={'Jack'}
          fotoUsuario={'https://thumbs.dreamstime.com/b/new-york-eua-de-novembro-pessoa-aleat%C3%B3ria-representando-o-coringa-e-dan%C3%A7ando-na-escada-do-bronx-nova-editorial-escadas-turista-162718760.jpg'}
          fotoPost={'https://i.pinimg.com/originals/88/df/59/88df5904abe9154f4e7999499fc4fdc3.jpg'}
        />

      </div>
      </div>
      </div>
    );
  }
} 

export default App;
