import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'


function App() {
  const [value, setValue] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  function generate(Link) {
    QRCodeLink.toDataURL(Link, {
      width:500,
      margin: 3
    }, (err,uri) => {
      setQrCodeUrl(uri)
    })
  }

function handleQrCode(e) {
  setValue(e.target.value)
  generate(e.target.value)
}

  return (
    <div className='container'>
      <div className='card'>
          <strong className='title'>QRCODE GENERATOR</strong>
          <span className='subtitle'>Insira algo para gerar o qrcode</span>
          
          <input 
          type="text" 
          value={value}
          className="input"
          placeholder='Insira aqui o seu texto...'
          onChange={(e) => handleQrCode(e)}/>

          <div className='qr-code'>
                <QRCode value={value} size={96} elevation={2}/>
          </div>

          <a href={qrCodeUrl} download="qrcode.png" className='btn-download'>Download</a>
          
      </div>
    </div>
      
  )
}

export default App