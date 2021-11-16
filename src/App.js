import { useState } from 'react';
import './App.css';
import './component/Button';
import Button from './component/Button';
import './component/Display';
import Display from './component/Display';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlusHandler = (c) => () => setCount(count + c);

  const onClickMinusHandler = () => {
    setCount(count - 1);
  };

  const onClickResetHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Display count={count} />
        <Button text={'+1'} onClick={onClickPlusHandler(1)} />
        <Button text={'RESET'} onClick={onClickResetHandler} />
        <Button text={'-1'} onClick={onClickMinusHandler} />
        <Button text={'+10'} onClick={onClickPlusHandler(10)} />
      </header>
    </div>
  );
}

export default App;
