import React from 'react'
import Header from '../components/Header/Header'
import NavVerticale from '../components/NavVerticale/NavVerticale'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Content = styled.div`
  display: flex;
`
const Container = styled.div`
  width: 100px;
  height: 200px;
  margin: 50px;
`

/**
 * render Home Page
 * @returns {JSX}
 */
const HomePage = () => {
  return (
    <div>
      <Header />
      <Content>
        <NavVerticale />
        <Container>
          <h1>Users</h1>
          <NavLink to="/user/12">12</NavLink>
          <br />
          <NavLink to="/user/18">18</NavLink>
        </Container>
      </Content>
    </div>
  )
}

export default HomePage
