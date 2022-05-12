import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Mid from './Components/mid';
import Header from './Components/header';
import Footer from './Components/footer';


function App(){
  return(
  <div>
    <BrowserRouter>
    <Header></Header>
    <Mid></Mid>
    <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
