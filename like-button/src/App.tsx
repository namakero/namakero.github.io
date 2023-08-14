import './App.css';
import React, {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const LikeButton = () => {
  const [count, setCount] = useState(9998);
  const handleClick = () => {
    if(count > 9998){
      setCount(0);
    }else{
      setCount(count + 1);
    }
  }
  return <span className="likeButton" onClick={handleClick}>♥{count}</span>
}

export default App;
