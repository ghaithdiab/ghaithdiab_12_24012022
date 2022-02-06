import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getAverageSessions } from '../../service/data'
import styled from 'styled-components'
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from 'recharts'
import CustomSessionToolTip from '../CustomSessionsToolTip/CustomSessionToolTip'

const Container = styled.div`
  width: 258px;
  height: 263px;
  background-color: #ff0000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
`
const Text = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  padding: 29px 34px 0 34px;
`

/**
 * render Average Duration Sessions component with Data
 * @returns {JSX}
 */
const AverageDurationSessions = () => {
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      const request = await getAverageSessions(id)
      if (!request) return alert('faild load data')
      const formatData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: 'L' }
          case 2:
            return { ...data, day: 'M' }
          case 3:
            return { ...data, day: 'M' }
          case 4:
            return { ...data, day: 'J' }
          case 5:
            return { ...data, day: 'V' }
          case 6:
            return { ...data, day: 'S' }
          case 7:
            return { ...data, day: 'D' }
          default:
            return { ...data }
        }
      })
      setData(formatData)
    }
    getData()
  }, [id])
  if (data.length === 0) return null
  return (
    <Container>
      <Text>Durée moyenne des sessions</Text>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: 100,
              stroke: 'rgba(255, 255, 255, 0.5)',
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, 'dataMax+30']}
            hide={true}
          />
          <Tooltip content={<CustomSessionToolTip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
            padding={{ left: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default AverageDurationSessions
