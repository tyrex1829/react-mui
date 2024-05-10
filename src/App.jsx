import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button color="error" variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button color="success" variant="outlined">Outlined</Button>
    </div>
  )
}

export default App
