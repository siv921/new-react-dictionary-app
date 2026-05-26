import Dictionary from "./Dictionary";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
      Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
