import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://localhost:7197/My')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>data:{data}</div>
    </>
  )
}

export default App


