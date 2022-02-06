import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 500;
  font-family: Roboto;
  margin-bottom: 10px;
`
const Span = styled.span`
  color: red;
`
const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: Roboto;
`

/**
 * render User Name compnent with Data
 * @param {prop} string
 * @returns {JSX}
 */
const UserName = (prop) => {
  return (
    <div>
      <H1>
        Bonjour <Span>{prop.name}</Span>
      </H1>
      <P>Félicitation ! Vous avez explosé vos objectifs hier 👏</P>
    </div>
  )
}
UserName.propTypes = {
  name: PropTypes.string,
}

export default UserName
