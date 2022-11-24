import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom'
import  {lazy, Suspense} from 'react';

const Home =lazy (()=> import("./components/Home"))
const Tareas =lazy (()=> import("./components/Tareas"))
const SobreNosotros =lazy (()=> import("./components/SobreNosotros"))


function App() {
  return <div className='contenedor'> 

<Nav/> 
<Suspense fallback ={<p>otra cosa</p>}>
<Routes>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Tareas' element={<Tareas/>}/>
  <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
</Routes>
</Suspense>

  </div>

}
export default App;
