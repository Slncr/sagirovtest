import './App.css';
import Header from './components/Header';

function App() {
  const handleMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  }

  for(const card of document.querySelectorAll('.card')) {
    card.onmousemove = e => handleMove(e);
  }  

  return (
    <div className='App'>
      <div className='App-container'>
          <Header />
        <div className='main-container'>
 
          <div className='main-left'>
          <div>
            <h2>ПУТЕШЕСТВИЕ</h2>
            <span>на красную планету</span>
            </div>
            <button><h3>Начать путешествие</h3></button>
          </div>
          
          <div className='main-right' id='cards'> 
            <div className='card'>
            <div className='card-text'>
              <p1>мы</p1>
              <h1>1</h1>
              <p>на рынке</p>
            </div>
            </div>
            <div className='card'>
            <div className='card-text'>
              <p1>гарантируем</p1>
              <h1>50%</h1>
              <p>безопасность</p>
            </div>
            </div>
            <div className='card'>
            <div className='card-text'>
              <p1>календарик за</p1>
              <h1>2001</h1>
              <p>в подарок</p>
            </div>
            </div>
            <div className='card'>
            <div className='card-text'>
              <p1>путешествие</p1>
              <h1>597</h1>
              <p>дней</p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
