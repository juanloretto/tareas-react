import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ListaTareas from './components/ListaTareas'
import './App.css'


function App() {

  return(
  <main className='min-vh-100 d-flex justify-content-center bg-secondary-subtle'>
    <div className='col-md-8 h-100 bg-light shadow p-3 rounded'>
<h1 className='mt-3 mb-5 text-center' >Agenda Diaria</h1>
<ListaTareas/>

    </div>

  </main>

  )
}

export default App
