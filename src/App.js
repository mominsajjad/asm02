import logo from './logo.svg';
import './App.css';
import ComplaintForm from './ComplaintForm';

function App() {
  const title="Law";
  const depart = "operations";
  return (
    <ComplaintForm title={title} depart={depart} />
  );
}

export default App;
