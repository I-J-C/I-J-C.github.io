// import logo from './logo.svg';
import './App.css';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a
          className="linkedIn-link"
          href="https://www.linkedin.com/in/ijessiec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="github-link"
          href="https://github.com/I-J-C"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
      <div>
        <span className='name'> Jessie (Ilka) Collado </span>

        <ProjectContainer />
      </div>
    </div>
  );
}

export default App;
