import React, { useState } from 'react'
import '../components/App.css';
import { Header } from '../partials/header';
import kapakli from '../assets/kapakli.jpg';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import FormInput from "../components/FormInput";
import ModalForm from "../components/ModalForm";
import ButtonForm from "../components/ButtonForm";

const StyledPrivatePage = styled.div`
color: #fefae0;

.pre-container{
  color: black;
  font-weight: 900;
  font-size: 100%;
  border-style: inset;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
  position: absolute;
  right: 0;
  top: 200px;
}
.button {
  background-color: #A75D5D;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.addbuton{
  background-color: #65647C;
}

`;
const ContactPage  = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

const handleSizeChange = (size) => {
  setSelectedSize(size);
};

const handleColorChange = (color) => {
  setSelectedColor(color);
};

const handleQuantityChange = (newQuantity) => {
  setQuantity(newQuantity);
};

const handleAddToCart = () => {
  // Sepete ekleme işlemleri burada gerçekleştirilebilir
};




  return (
    <StyledPrivatePage>
      <Header />
      <h5 style={{ color: 'black', textAlign: 'center' }}>
      Ürünler</h5>
      <div className='row'>
      <div className="col-lg-4 col-md-6 col-sm-12">
      <h3 style={{color:'#6C3428 '}}>Kapaklı Omuz Çantası</h3>
      {/* Diğer ürün detayı bileşenleri */}
     
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={kapakli} />
          </div>
          <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <div>
          <p>Sizes:</p>
          <div>
            <button className='button' onClick={() => handleSizeChange('XS')}>XS</button>
            <button className='button'  onClick={() => handleSizeChange('S')}>S</button>
            <button className='button' onClick={() => handleSizeChange('M')}>M</button>
            <button className='button' onClick={() => handleSizeChange('L')}>L</button>
            <button className='button' onClick={() => handleSizeChange('XL')}>XL</button>
          </div>
        </div>
        <div>
          <p>Colors:</p>
          <div>
            <button className='button'  onClick={() => handleColorChange('Black')}>Krem</button>
            <button className='button'  onClick={() => handleColorChange('White')}>Pembe</button>
            <button className='button' onClick={() => handleColorChange('Red')}>Turuncu</button>
            <button className='button' onClick={() => handleColorChange('Blue')}>Yeşil</button>
            <button className='button' onClick={() => handleColorChange('Green')}>Siyah</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p style={{color:'#D1512D'}}>Fiyat: 120 TL</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>
        <button className='addbuton'onClick={handleAddToCart}>Sepete Ekle</button>
      </div>
    </div>
    </div>
</div>
  
    </StyledPrivatePage>

  );
  }


export default ContactPage;