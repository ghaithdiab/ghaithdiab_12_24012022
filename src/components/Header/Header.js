import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  margin: 0;
  padding: 10px;
`
const LogoImg = styled.img`
  height: 60px;
  width: 177px;
  margin-left: 10px;
`
const NavBar = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-around;
  a {
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    text-decoration: none;
  }
`

/**
 * render Header component
 * @returns {JSX}
 */
const Header = () => {
  return (
    <Head>
      <LogoImg src={logo} alt="logo" />
      <NavBar>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </NavBar>
    </Head>
  )
}

export default Header
