import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts'

const Container = styled.div`
  width: 258px;
  height: 263px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(251, 251, 251, 1);
  position: relative;
`
const Title = styled.h2`
  position: absolute;
  top: 8%;
  left: 12%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0;
  color: rgba(32, 37, 58, 1);
`
const Text = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
  color: #74798c;
`
const UserScore = ({ data }) => {
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ]
  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={score} innerRadius={80} dataKey="value" startAngle={90}>
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        {score[0].value * 100}%<br />
        de Votre
        <br />
        objectif
      </Text>
    </Container>
  )
}

export default UserScore

UserScore.propTypes = {
  data: propTypes.object,
}
