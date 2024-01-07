import React from 'react';
import '../components/App.css';
import { Header } from '../partials/header';
import {deribaget} from '../assets/deribaget.jpg';
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
import { useRef } from 'react';
import Swal from "sweetalert2";



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
`;

const productCard = (props) => {
  const { imageUrl, productName, price, discountedPrice } = props;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={deribaget} alt={productName} />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{productName}</h6>
          <div className="d-flex justify-content-center">
            <h6>{price} 120 TL</h6>
            <h6 className="text-muted ml-2"><del>{discountedPrice} TL</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href="siyahduz.html" className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1"></i>Detaylı İncele
          </a>
          <a href="odeme.html" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1"></i>Sepete Ekle
          </a>
        </div>
      </div>
    </div>
  );
};

export default productCard;
