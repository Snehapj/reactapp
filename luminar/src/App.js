import './App.css';
import Random from './Random';
import { useState } from 'react'

function App() {
  const name="ABCDE"
  const name2="Hello world"
  return (
    <div className="App">
      <Random value={name} item={name2}/>

    </div>

  );
}
export default App;

//react is a library and angular is a framework
//react advg-virtual dom,component based approach, jsx-javascript xml
//angular uses real dom
//how to set up a react app-npx create-react-app name
//cd name
//npm start
//Components are independent and reusable bits of code. 
//two types of components- class based and function based compenent
//react hooks - to convert class based component to function based component
//state - it is an object that holds a piece of info over a period of time.it belongs inside a component
//class based components are statefull compoents and function based components are stateless components
//useState hook - function based component we can create a state  
//// props - properties:it is used to communicate b/w different components:function Random({props}) {
// destructoring : function Random({value,item}) {
////how will you extract the data from an api in react
//fetch(js inbuilt method)
//Axios
//params - dynamic changing contents are called as params. 
//1- useState
//2- useEffect - it fires of the effect written inside the useEffect hook, if you want to give an effect to your component.
//component life cycle methods
//1.mounting - componentDidMount()
//2.updating - componentDidUpdate()
//3.unmounting - componentWillUnmount()
//redux- it is a state management tool.
//why redux- inorder to avoid props drilling.
//redux consist of 3 basic blocks- store,action,reducers.
//map() function to map a list of values to a list of components.