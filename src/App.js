
import Home from './Home'
import Newpage from './NewPage'
import {Link,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './Pages/Card'
import Cards from './Pages/Crads'
import Star from './Pages/Star'
import Comments from './Pages/Comments'
import ShareButton from './Pages/ShareButton'

export default function App() {
  return (
    <>
    
    <Navbar>
    </Navbar>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route  exact path='/cards' element={<Cards len={5} />}></Route >
      
      <Route path='/star' element={<Star/>}/>
      <Route path='/comments' element={<Comments/>} />
      <Route path='/share' element={<ShareButton/>} />
    </Routes>

    
    </>
  )
}
