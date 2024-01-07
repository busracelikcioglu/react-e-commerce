import React, { useState } from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";


const StyledAboutPage = styled.div`
  padding: 50px;
`;

const Deneme = () => {
  
 
  return (
    
    <StyledAboutPage>
      <h5>
        Bize Ulaşın! 
      </h5>
<p>
<div className="fl col-12" id="contactInfo">
      <p>
        <strong className="fw700">
          Adres : 
        </strong>
        Kabaoğlu, Baki Komsuoğlu bulvarı No:515, Umuttepe, 41001 İzmit/Kocaeli
      </p>
      <p>
        <strong className="fw700">
          Telefon:
        </strong> (0262) 303 10 00
      </p>
      
        <br />
        <strong className="fw700"> E-posta : </strong>
        busra.celikcioglu1@gmail.com
        <br />
    
      <p>
        <strong className="fw700">
          İş Birliği :
        </strong>
        <a href="https://isbirligi.cozyshopper.com.tr/">isbirligi.cozyshopper.com.tr</a>
      </p>
    </div>
</p>
 <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48327.3689630771!2d29.88723994813864!3d40.79587205650247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4e8ad751f097%3A0xdb29061ce8f77254!2zS29jYWVsaSDDnG5pdmVyc2l0ZXNpIFVtdXR0ZXBlIEthbXDDvHPDvCBCIEthcMSxc8Sx!5e0!3m2!1str!2str!4v1669725650741!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </StyledAboutPage>
  );
};
export default withLayout(Deneme);