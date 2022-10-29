import React from 'react'
import  SimpleFileUpload  from 'react-simple-file-upload'

export default function Login() {

  function handleFile(url){
    console.log('The URL of the file is ' + url)
  }

  return (
    <div className="upload-wrapper">
    
      <SimpleFileUpload
      apiKey="ec34f680-278a-4059-a570-88c7a4e44ca9"
      onSuccess={handleFile}
      />
      </div>
    
  )
}
