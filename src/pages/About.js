import React, { useState } from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Input
} from "reactstrap";
import FormInput from "../components/FormInput";
import ModalForm from "../components/ModalForm";
import ButtonForm from "../components/ButtonForm";


const StyledAboutPage = styled.div`
  padding: 50px;
`;

const About = () => {

  const [showModal, setShowModal] = useState(false);
  const [showBModal, setShowBModal] = useState(false);
  const [selectedOgr, setSelectedOgr] = useState({
  
  });
 
  const clickEventsOpen = () => {
    setShowModal(true);
    console.log(selectedOgr);
  };
  
  const clickEventsClose = () => {
    setShowModal(false);
    setShowBModal(false);
  };
  const downloadbutton = () =>{
    setShowBModal(true);
    console.log("İçeride");
  }
 
  return (
    <StyledAboutPage>
      <div className="content pb-0">
        <Row style={{ height: "100%" }}>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Sepetim</CardTitle>
     
              </CardHeader>
              
            </Card>
          </Col>
        </Row>
        
      
      </div>
    </StyledAboutPage>
  );
};
export default withLayout(About);
