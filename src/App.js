import { AddContact, ListContact } from "./components";

function App() {
  return (
    <div style={{ 'padding': '30px' }}>
      <h2>Aplikasi Kontak App</h2>
      <hr/>
      <AddContact />
      <hr/>
      <ListContact />
    </div>
  );
}

export default App;
