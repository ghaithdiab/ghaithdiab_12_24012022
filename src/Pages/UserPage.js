import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import NavVerticale from '../components/NavVerticale/NavVerticale'
import { useParams } from 'react-router-dom'
import UserName from '../components/UserName/UserName'
import { getUserInfo } from '../service/data'
import UserActivity from '../components/UserActivity/UserActivity'
import AverageDurationSessions from '../components/AverageDurationSessions/AverageDurationSessions'
import UserPerformance from '../components/UserPerformance/UserPerformance'
const Content = styled.div`
  display: flex;
  justify-content: spce-between;
`
const Info = styled.div`
  width: 80%;
  margin: 30px auto;
`
const Container=styled.div`
  display:flex;
`
const ContainerLeft=styled.div`
  display:flex;
  flex-direction:column;
`
const Cards=styled.div`
  display:flex;
`
const ContainerRight=styled.div`
  display:flex;
  flex-direction:column;
`
const UserPage = () => {
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      const req = await getUserInfo(id)
      if (!req) return alert('faild to get data')
      setData(req.data)
    }
    getData()
  }, [id])
  if (data.length === 0) return null
  return (
    <div>
      <Header />
      <Content>
        <NavVerticale />
        <Info>
          <UserName name={data.userInfos.firstName} />
          <Container>
            <ContainerLeft>
              <UserActivity/>
              <Cards>
              <AverageDurationSessions/>
              <UserPerformance/>
              </Cards>
            </ContainerLeft>
            <ContainerRight></ContainerRight>
          </Container>
        </Info>
      </Content>
    </div>
  )
}

export default UserPage
