import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="Dashboard">
      <Navbar />
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
