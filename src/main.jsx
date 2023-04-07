import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/* import du fichier global index contenant tous les fichiers scss */
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
