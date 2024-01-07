import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    height: 3%;
    background-color: rgba(202, 240, 248, 0.70);
    padding: 5px;
    text-align: center;
    font-size: 0.8em; 
    color: #333; 
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <h6>
                Stil sahibi çanta tutkunları için en özel seçimleri sunan CozyShopper ile tarzınızı öne çıkarın! Online çanta alışverişinin vazgeçilmez adresi CozyShopper, geniş ürün yelpazesiyle beğeninizi kazanıyor. En sevdiğiniz çanta modellerini özel günlerde veya sıradan günlerde sevdiklerinize göndermek artık çok kolay! Türkiye'nin her yerine hızlı ve güvenilir kargo ağıyla çanta siparişlerinizi ulaştırıyoruz.
            </h6>
            Hoşgeldiniz CozyShopper
        </StyledFooter>
    ) 
}

export default Footer;
