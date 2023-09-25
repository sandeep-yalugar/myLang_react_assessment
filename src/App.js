
import Home from './Home'
import Newpage from './NewPage'
import {Link,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './Pages/Card'
import Cards from './Pages/Crads'
import Star from './Pages/Star'
import Comments from './Pages/Comments'
import ShareButton from './Pages/ShareButton'
import {useEffect,useState} from 'react'

export default function App() {
  const [login,setLogin] = useState(false);
  useEffect(() =>{
    const sLogin = localStorage.getItem('sLogin');
    if(sLogin===null){
      localStorage.setItem("sLogin",JSON.stringify({state:false}))
    }
    else{
      const loginState= JSON.parse(localStorage.getItem('sLogin'));
      setLogin(loginState.state);
    }

  },[])
  
  return (
    <>
    
    <Navbar>
    </Navbar>

    <Routes>
      <Route path='/' element={<Home login={login} setLogin={setLogin} />} />
      <Route  exact path='/cards' element={<Cards len={5} login={login} />}></Route >
      
      <Route path='/star' element={<Star login={login}/>}/>
      <Route path='/comments' element={<Comments login={login} />} />
      <Route path='/share' element={<ShareButton login={login} />} />
    </Routes>

    
    </>
  )
}
