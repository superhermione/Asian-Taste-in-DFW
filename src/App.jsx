import './App.css';
import CardContainer from './components/CardContainer';

const App = () =>{
  return(
    <div className ='App'>
      <img src='./assets/asian.jpg' alt="title-picuture"/> 
      <h1>Authetic Asian Restaurants in DFW Area</h1>
      <h2>This website lists the most popular Asian food. Feel free to visit one of them! Check out their menu! They are all great! </h2>
      <CardContainer/>
  </div>); 
}

export default App
