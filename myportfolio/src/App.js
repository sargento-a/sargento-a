/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bonjour !<br/> Je suis Anthony Sargento</h1>
      </header>
      <img 
        className='waves-up'
        src="/wave.svg"
        />
      <body className="App-body">
        <h1>Projets</h1>
          <div className='container' itemID='HC'>
            <img
            className='HC-img'
            src='/Hyrule_Castle_main_title.png'
            alt='Hyrule Castle main page'
            />
            <img
            className='HC-img'
            src='/Hyrule_Castle.png'
            alt='Hyrule Castle shop'
            />
            <div className='Ptext'>
              <h2>Hyrule Castle<br/></h2>
              <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
            </div>
          </div>
          <div className='container' itemID='TF'>
            <div className='Ptext'>
              <h2>The Forge<br/></h2>
              <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
            </div>
            <img
            className='TF-img'
            src='/The_Forge_main_title.png'
            alt='The Forge main title'
            />
            <img
            className='TF-img'
            src='/The_Forge.png'
            alt='The Forge game'
            />
          </div>
      </body>
      <img 
        className='waves-down'
        src="/wave(1).svg"
        />
      <footer className="App-footer">
        footer
      </footer>
    </div>
  );
}

export default App;
