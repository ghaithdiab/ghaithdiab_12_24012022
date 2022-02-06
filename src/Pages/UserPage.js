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
import UserScore from '../components/UserScore/UserScore'
import CardsVerticale from '../components/CardsVerticale/CardVerticale'
import chesseburger from '../assets/cheeseburger.svg'
import PathCopy from '../assets/PathCopy.png'
import Path from '../assets/Path.png'
import Path1 from '../assets/Path1.png'
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
  justify-content: space-between;
`
const ContainerLeft=styled.div`
  display:flex;
  flex-direction:column;
`
const Cards=styled.div`
  display:flex;
  justify-content: space-between;
`
const ContainerRight=styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
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
              <UserScore data={data}/>
              </Cards>
            </ContainerLeft>
            <ContainerRight>
              <CardsVerticale icon={Path} info={`${data.keyData.calorieCount}kCal`} text='Calories' bkColor='#FBEAEA'></CardsVerticale>
              <CardsVerticale icon={Path1}info={`${data.keyData.proteinCount}g`} text='Proteines' bkColor='#E8F4FB'></CardsVerticale>
              <CardsVerticale icon={PathCopy} info={`${data.keyData.carbohydrateCount}g`} text='Glucides' bkColor='#FBF3E0'></CardsVerticale>
              <CardsVerticale icon={chesseburger} info={`${data.keyData.lipidCount}g`} text='Lipides'bkColor='#F9E1E6'></CardsVerticale>
            </ContainerRight>
          </Container>
        </Info>
      </Content>
    </div>
  )
}

export default UserPage
