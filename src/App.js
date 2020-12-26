import Card from './compoments/Card'
import LikeButton from './compoments/LikeButton';
import Clock from './compoments/Clock'
import Form from './compoments/Form'
import './App.css';

function App() {
  const tags = ['前端开发', 'Bug开发工程师']
  return (
    <div className="App">
      <Card name="7years" number={12346365} isHuman tags={tags}></Card>
      <LikeButton />
      <Clock />
      <Form />
    </div>
  );
}

export default App;
