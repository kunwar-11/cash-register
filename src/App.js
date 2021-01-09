import React , {useState} from 'react'
import Input from './component/Input'
import Data from './component/Data'
import './styles/App.scss'
function App() {
  const [bill , setBill] = useState('');
  const [paid , setPaid] = useState('');
  const [msg , setMsg] = useState('');
  const [rem , setRem] = useState('');
  const [isDark , setIsDark] = useState(false);
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <h1>Cash Register <span onClick = {() => setIsDark(!isDark)} style = {{textAlign : 'right' , cursor : 'pointer' , transition : 'all 0.5s ease'}}>{isDark ? '🌞' : '🌙'}</span></h1>
      <Input bill = {bill} setBill = {setBill} paid = {paid} setPaid = {setPaid} rem = {rem} setRem = {setRem} setMsg = {setMsg} isDark = {isDark}/>
      <Data rem = {rem} msg = {msg}/>
    </div>
  );
}

export default App;
