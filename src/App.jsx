import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from './RatingDemo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RatingDemo />
    </div>
  )
}

export default App
