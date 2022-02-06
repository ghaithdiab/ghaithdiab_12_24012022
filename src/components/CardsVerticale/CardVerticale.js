import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
const Container = styled.div`
  width: 258px;
  height: 124px;
  padding: 0 20px;
  background: rgba(251, 251, 251, 1);
  border-radius: 5px;
  display: flex;
  justify-content: space-betwwen;
  align-items: center;
`
const ImgContainer = styled.div`
  background-color: ${(props) => props.color};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  border-radius: 6px;
`
const Photo = styled.img`
  width: 19px;
  height: 19px;
`
const Infos = styled.div``
const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`
const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: rgba(116, 121, 140, 1);
`
const CardsVerticale = ({ icon, info, text, bkColor }) => {
  return (
    <Container>
      <ImgContainer color={bkColor}>
        <Photo src={icon} alt={`${text} icon`} />
      </ImgContainer>
      <Infos>
        <Title>{info}</Title>
        <Text>{text}</Text>
      </Infos>
    </Container>
  )
}

export default CardsVerticale

CardsVerticale.propTypes = {
  icon: propTypes.any,
  info: propTypes.string,
  text: propTypes.string,
  bkColor: propTypes.string,
}
