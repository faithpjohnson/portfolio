import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'



function App () {

    return (
      <Routes>
        <Route
          path='/'
          element={<HomePage/>}
        />
      </Routes>
    )
}

export default App
