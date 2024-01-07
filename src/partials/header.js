import React, { useCallback } from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ProfileDropDown } from '../components/ProfileDropDown';
import Swal from 'sweetalert2';
import search from '../assets/search.png';


const StyledHeader = styled.div`
    height: 10%;
    background-color: #EBE3D5;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    box-shadow: 0px 2px 10px black;

    .logo.container{
        flex: 0.5;
        img{
            height: 8vh;
        }
    }
    .menu.container{
        flex: 1;
    }

    nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    
    ul{
        list-style: none;
    }
   
    ul a {
        color: #607274;
        float: left;
        text-decoration: none;
        position: relative;
    }
    ul a: after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transition: transform 0.25s ease-out;
    }
    ul a:hover: after {
        // opacity: 0.7;
        transform: scaleX(1);
    }
    ul a: not(:first-child) {
        margin-left: 20px;

    }
    .top-menu-btn{
        float: right;
        margin: 20px;
        background-color: #B2A59B;
        padding: 2px 20px;
        border: none;
        cursor: pointer;
        border-radius:10px;
        width: 110px;
        height: 40px;
        color: #607274;
        .search-container
        {
            
        }
    }

`;
const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const Dropdown = () => {
  return (
    <DropdownMenu>
      <Link to="/kategoriler">Kategoriler</Link>
      <DropdownContent className="dropdown-content">
        <Link to="/kategori/omuz-cantasi">Omuz Çantası</Link>
        <Link to="/kategori/el-cantasi">El Çantası</Link>
        <Link to="/kategori/sirt-cantasi">Sırt Çantası</Link>
      </DropdownContent>
    </DropdownMenu>
  );
};


export const Header = () => {
    const [user, setUser] = useLocalStorage('user');
    const history = useHistory();

    const handleLogin = useCallback(()=>{
        history.push("/login");
    }, [history])

    const handleLogout = useCallback(()=>{
        setUser("");
        history.push("/");
        Swal.fire('Çıkış Yaptınız');
    }, [setUser, history])

    return (
        <StyledHeader>
            <div className='logo-container'>
                <img width="100" height="120" src={logo} alt="logo" />
            </div>
            <nav className='menu-container'>
                <ul>
                    <Dropdown /> 
                    <Link to="/">Anasayfa</Link>
                 
                    <Link to="/urunler">Ürünler</Link>
                    <Link to="/outlet">Outlet</Link>
                    <Link to="/sepetim">Sepetim</Link>
                    <Link to="/iletisim">İletişim</Link>
                </ul>
                {user ? (
                    <ProfileDropDown userName={user} handleLogout={handleLogout}/>
                ) : (
                    <button className="top-menu-btn" onClick={handleLogin}>
                        Giriş Yap
                    </button>
                )}
            </nav>

       
        </StyledHeader>
    )
    
}