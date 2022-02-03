import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import NavVerticale from '../components/NavVerticale/NavVerticale'
import { useParams } from 'react-router-dom'
import UserName from '../components/UserName/UserName'
import { getUserInfo } from '../service/data'
const Content = styled.div`
  display: flex;
  justify-content: spce-between;
`
const Info = styled.div`
  width: 80%;
  margin: 30px auto;
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
        </Info>
      </Content>
    </div>
  )
}

export default UserPage
