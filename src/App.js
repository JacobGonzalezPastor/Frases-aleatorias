import './App.css';
import { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
function App() {

  const [fraseInfo, setFraseInfo] = useState({})

  useEffect(() => {
    getFrase();
  }, []);

  const getFrase = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFraseInfo({
          texto: data.content,
          autor: data.author
        })
        console.log(data);
      });
  };

  return (
    <div className="App">
      <div id='caja_frases'>
        <p id='texto'>{fraseInfo.texto}</p>
        <p id='autor'>{fraseInfo.autor}</p>
        <Button id='nueva-frase' onClick={getFrase} color='youtube'>
          <Icon name='random' /> Nueva Frase</Button>
        <br />
        <Button id='tweet-frase' href='#' color='twitter'>
          <Icon name='twitter' /> Postear en twitter</Button>
      </div>
    </div>
  );
}

export default App;
