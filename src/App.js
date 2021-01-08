import React , {useState} from 'react'
import Input from './component/Input'
import Data from './component/Data'
function App() {
  const [bill , setBill] = useState('');
  const [paid , setPaid] = useState('');
  const [msg , setMsg] = useState('');
  const [rem , setRem] = useState('');
  console.log(rem)
  console.log(msg)
  return (
    <div className="App">
      <h1>Cash Register</h1>
      <Input bill = {bill} setBill = {setBill} paid = {paid} setPaid = {setPaid} rem = {rem} setRem = {setRem} setMsg = {setMsg}/>
      <Data rem = {rem} msg = {msg}/>
    </div>
  );
}

export default App;
