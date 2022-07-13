import { Component, createEffect, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const [randomColor, setRandomColor] = createSignal('#000000');

  createEffect(() => {
    console.log(count());
    setRandomColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  });

  return (
    <div class={styles.App} style={{ 'background-color': randomColor() }}>
      <div style={{ padding: 20, 'background-color': 'white' }}>
        <p style={{ color: 'black' }}>{count()}</p>
      </div>
      <button onClick={() => setCount(count() + 1)}>Inc</button>
      <button onClick={() => setCount(count() - 1)}>Dec</button>
    </div>
  );
};

export default App;
