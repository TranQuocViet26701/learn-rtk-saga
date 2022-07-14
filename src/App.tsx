import { studentApi } from 'api';
import './App.css';
import { Counter } from './features/counter/Counter';
import logo from './logo.svg';

function App() {
  const fetchData = async () => {
    // const data = await studentApi.getAll({
    //   _page: 1,
    //   _limit: 40,
    //   _sort: 'mark',
    //   _order: 'desc',
    // });
    // console.log(data);

    const dataStudent = await studentApi.getById('r1QkPNN');
    console.log(dataStudent);
  };

  fetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
