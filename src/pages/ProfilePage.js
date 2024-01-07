import React, {useState}from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import axios from "axios";
import FileUpload from "../components/FileUpload";

const StyledProfilePage = styled.div`
card-body{
   position: center;
}

`;

export const ProfilePage = () =>{
   const [file, setFile] = useState()

function handleChange(event) {
   setFile(event.target.files[0])
 }
 function handleSubmit(event) {
   event.preventDefault()
   const url = '';
   const formData = new FormData();
   formData.append('file', file);
   formData.append('fileName', file.name);
   const config = {
     headers: {
       'content-type': 'multipart/form-data',
     },
   };
   axios.post(url, formData, config).then((response) => {
     console.log(response.data);
   });
 }
 

    const dataChangerThumbnail = (value) => {
        setFormData({...formData, thumbImage: value})
    }

    const formInitial = {
        thumbImage: '',
    }
    const [formData, setFormData] = useState(formInitial)
    return(
        <StyledProfilePage>
           
            <div className="container-xl px-4 mt-4">
    
    <hr className="mt-0 mb-4"/>
    <div className="row">
        <div className="col-xl-4">
           
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profil Fotoğrafı</div>
                <div className="card-body text-center"> 
                    <form onSubmit={handleSubmit}>
                    {/* <button className="btn btn-primary" type="file" onChange={handleChange}>Upload new image</button> */}
                    <FileUpload 
        name="thumbImage" 
        button_title="Resim Seç"  
        max_file_size_in_kb="200" 
        dataChanger={(value) => dataChangerThumbnail(value)} 
        type="image"  
        prev_src={'localhost:8001/'+formData?.thumbImage} 
        required 
        allowed_extensions={[ 'jpg', 'jpeg', 'png', 'gif']} 
    /> 
        </form>
                </div>
            </div>
        </div>
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Kişisel Bilgiler</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="small mb-1" for="inputUsername">Ad Soyad</label>
                            <input disabled= {false} className="form-control" id="inputUsername" type="text"  />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">Adres</label>
                                <input className="form-control" id="inputFirstName" type="text"  />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Telefon</label>
                                <input className="form-control" id="inputLastName" type="text"  />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">E-mail</label>
                            <input className="form-control" id="inputEmailAddress" type="email" />
                        </div>
                       
                        <button className="btn btn-primary" type="button">Kaydet</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        </StyledProfilePage>
    )
}
export default withLayout(ProfilePage);