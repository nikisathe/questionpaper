import React from 'react'
import QuestionPapers from './Components/QuestionPapers'
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<QuestionPapers />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
