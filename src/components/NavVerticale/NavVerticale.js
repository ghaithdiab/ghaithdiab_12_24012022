import React from 'react'
import styled from 'styled-components'
import Group3 from '../../assets/Group3.png'
import Group from '../../assets/Group.png'
import Vector from '../../assets/Vector.png'
import Vector1 from '../../assets/Vector1.png'
const VerticaleMenu = styled.div`
  width: 110px;
  height: 1024px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ActivitesBtn = styled.button`
  width: 64px;
  height: 64px;
  background-color: #fff;
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 32px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`
const CopyRight = styled.p`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  color: #fff;
  transform: rotate(180deg);
  width: 10px;
  margin: auto;
`
const BtnsGroup = styled.div`
  width: 64px;
  margin: auto;
`
const NavVerticale = () => {
  return (
    <VerticaleMenu>
      <BtnsGroup>
        <ActivitesBtn photo={Group3} />
        <ActivitesBtn photo={Group} />
        <ActivitesBtn photo={Vector} />
        <ActivitesBtn photo={Vector1} />
      </BtnsGroup>
      <CopyRight>Copiryght, SportSee 2020</CopyRight>
    </VerticaleMenu>
  )
}

export default NavVerticale
