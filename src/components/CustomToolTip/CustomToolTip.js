import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
const Container=styled.div`
  width:80px;
  height:100px;
  background-color: rgba(230, 0, 0, 1);
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`
const Text=styled.p`
  color:#fff;
  font-family:Roboto;
  font-size:10px;
  margin-top:10px
`
const CustomToolTip=({active, payload})=>{
    if(active){
      return (
        <Container>
          <Text>{payload[0].value}Kg</Text>
          <Text>{payload[1].value}Kcal</Text>
        </Container>
    )
       } return null

}

export default CustomToolTip

CustomToolTip.propTypes={
  active:PropTypes.bool,
  payload:PropTypes.array
}