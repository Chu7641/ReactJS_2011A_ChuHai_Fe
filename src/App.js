import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button/Button';

 function onClickHandle(){
   alert("ấn cc")
 }

function App() {
  return (
    <div className="App">
      <Button className="class" 
      type='submit'
      onClick={onClickHandle}
      children='Ấn vào đây'/>

      
      <Button
        type="button"
        onClick={onClickHandle}
        className="A"
      >
        abc
      </Button>
    </div>
  );
}

export default App;
