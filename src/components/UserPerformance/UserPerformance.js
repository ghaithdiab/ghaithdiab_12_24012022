import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerformances } from "../../service/data";
import styled from "styled-components";
import { ResponsiveContainer ,RadarChart, PolarGrid, PolarAngleAxis, Radar} from "recharts";

const Container=styled.div`
  width:258px;
  height:263px;
  padding:10px;
  background-color:rgba(40, 45, 48, 1);
  border-radius:5px;

`
const UserPerformance=()=>{
  const [data,setData]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    const getData=async()=>{
      const request=await getPerformances(id)
      if(!request) return alert('faild to get data')
      const formatData=request.data.data.map((data)=>{
        switch(data.kind){
          case 1: return {...data,kind:'cardio'}
          case 2: return {...data,kind:'energy'}
          case 3: return {...data,kind:'endurance'}
          case 4: return {...data,kind:'strength'}
          case 5: return {...data,kind:'speed'}
          case 6: return {...data,kind:'intensity'}
          default : return {...data}
        }
      })
      setData(formatData)
    }
    getData()
  },[id])
  if(data.length===0) return null
  return (
    <Container>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart data={data} outerRadius='65%' cx='50%' cy='50%'>
          <PolarGrid gridType='polygon'/>
          <PolarAngleAxis dataKey='kind' stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 12,fontFamily:'Roboto',fontWeight:200 }}/>
          <Radar dataKey='value' storke='#ff0101' fill="#ff0101" fillOpacity={0.7}/>
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default UserPerformance