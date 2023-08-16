import React from 'react'
import { useState } from 'react'

function FileUpload(){
    const[file,setFile]=useState()

    function handleFile(event){
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    function handleUpload(){
        const formData=new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json()).then(
            (result) =>{
                console.log('success',result)
            }
        )
        .catch(error => {
            console.error("Error:",error)
        })
    }

    return (
        <>
            <div className="my-5 mx-5 form-floating">
                <p style={{ fontWeight:'bold'}}>Images or Document(Upload below 2mb)</p>
                <form onSubmit={handleUpload}>
                <div className="file-inputs" style={{fontSize:16,width:'34%',border:'2px solid black'}}>
                    
                    <input type="file" onChange={handleFile} id='editChooseFile'/></div><br></br>
                  <div> <button id='uploadDocumentsButton'>
                        Upload Documents
                    </button>
            
                    </div>
                    </form>
                </div>

            
        </>
    )
}


export default FileUpload