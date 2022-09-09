import { useState } from 'react';
import './App.css';
import ListContact from './components/ListContact';

function App() {
  const [name, useName] = useState('Fwz');
  
  return (
    <div className="App">
      <h2>Aplikasi Kontak App {name}</h2>
      <ListContact name={name} />
    </div>
  );
}

export default App;
