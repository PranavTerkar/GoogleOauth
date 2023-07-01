import React from 'react'
import { useNavigate } from 'react-router-dom'
function Redirect() {
    const navigate = useNavigate();
  return (
    <div>
      <h1 style={{color:"red"}}>Hii</h1>
        <button onClick={()=>navigate("/")}>home</button>
    </div>
  )
}

export default Redirect
