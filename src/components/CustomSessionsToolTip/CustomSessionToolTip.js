import React from "react";
import propTypes from 'prop-types'
import styled from "styled-components";

const Container=styled.div`
  width:39px;
  height:25px;
  background-color:#fff;
  text-align:center;
  padding:5px;
`
const Text=styled.p`
  font-family:Roboto;
  font-size:8px;
  font-weight:500;
`
const CustomSessionToolTip=({active,payload})=>{
  if(active){
    return (
      <Container>
        <Text>{payload[0].value} min</Text>
      </Container>
    )
  } return null
}

export default CustomSessionToolTip

CustomSessionToolTip.propTypes={
  active:propTypes.bool,
  payload:propTypes.array
}