import logo from './logo.svg';
import './App.css';
import Technologies from './technologies.js'
import Addition from './addition';

function App() {
  return (
    <div>
      <Header />
      <Technologies />
      <Addition />
      <Goodbye />
    </div>
  );
  
}

function Header(){
  return <div className='header'>This is header</div>
}


function Goodbye(){
 return <div>Thanks for watching</div>
}

export default App;
