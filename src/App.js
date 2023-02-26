import logo from './logo.svg';
import './App.css';
import Club from './components/Club/Club';
import Question from './components/Question/Question';

function App() {
  return (
    <div>
      <Club></Club>
      <div className='Question-container'>
        <Question></Question>
      </div>
    </div>
  );
}

export default App;
