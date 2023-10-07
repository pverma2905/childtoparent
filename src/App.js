import './App.css';
import Form from './Form';

function App() {
  const getData = (data) => {
    console.log("data coming child to parent", data)
  }
  return (
    <div className="App">
      <Form onSubmit={getData} />
    </div>
  );
}

export default App;
