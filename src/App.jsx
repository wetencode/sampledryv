import { useState } from 'react'
import './App.css'
import { SideBar } from './sidebar/sidebar'
import { Main } from './main/main'
import { Sub } from './sub/sub'

function App() {

  const [details, setDetails] = useState(false);
  const showDetails = ()=> setDetails(true);
  const hideDetails = ()=> setDetails(false);

  return (
    <>
      { details ? <Sub /> : null }


      <main className='structure_algorith__m_PkjhgfdfGHJKkjhgfGJKJgf'>

        <SideBar showDetails={showDetails}/>

        <div className='anonymou__s_gTYJHCflkj'></div>

        <Main showDetails={showDetails}/>

      </main>



    </>
  )
}

export default App
