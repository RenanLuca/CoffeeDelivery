import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CardContextProvider } from './context/CardContext'

function App() {
  return (
    <>
      <CardContextProvider>
        <BrowserRouter>
  
            <Router />
    
        </BrowserRouter>
      </CardContextProvider>
    </>

  )
}

export default App
