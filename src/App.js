import Dictionary from "./Dictionary";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App container-md">
      <header className="App-header">
      Dictionary
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
