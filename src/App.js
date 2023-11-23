import './App.css';
import { NotesWidget } from './components/NotesWidget/NotesWidget';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>My notes</h1>
      <NotesWidget />
    </div>
  );
}

export default App;
