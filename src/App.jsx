import './App.scss';
import MainLayout from './components/MainLayout/MainLayout';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>        
      </header>
      <main>
        <MainLayout/>
      </main>
    </div>
  );
}

export default App;
