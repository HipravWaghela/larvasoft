
import './App.css';
import Navbar from './component/Navbar';
import Sec1 from './component/Sec1';
import Sec2 from './component/Sec2';
import Sec3 from './component/Sec3';
import Sec4 from './component/Sec4';
import Sec5 from './component/Sec5';
import Footer from './component/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <main>
    <Sec1/>
    <Sec2/>
    <Sec3/>
    <Sec4/>
    <Sec5/>
   </main>
   <Footer/>
    </>
  );
}

export default App;
