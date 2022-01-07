import './App.css';
import Header from './components/Header'
import NotesList from './pages/NotesList'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotePage from './pages/NotePage';


function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" exact element={<NotesList />} />
        <Route path="/note/:id" element={<NotePage />} />
        </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
