import './style.css';
import { Routes, Route } from 'react-router-dom' 
import QuestionPage from './pages/QuestionsPage';
import AnswersPage from './pages/AnswersPage';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='questions' element={<QuestionPage/>}/>
          <Route path='answers' element={<AnswersPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
