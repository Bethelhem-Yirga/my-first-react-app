// App.jsx
import { useState } from 'react';
import Greeting from './Components/Greeting';
import Service from './Components/Service';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  }

  return (
    <div className="App">
      {/*<h1>My First React App!</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
       <button onClick={resetHandler}>
        reset
      </button>

       <Greeting name="John" />
      <Greeting name="Sarah" />
      */}

      <Service />
    </div>
  );
}

export default App;