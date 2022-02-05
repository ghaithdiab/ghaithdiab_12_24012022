import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity } from "../../service/data";
import {BarChart, CartesianGrid, Tooltip, XAxis, YAxis,Bar} from 'recharts'
import styled from "styled-components";
import CustomToolTip from "../CustomToolTip/CustomToolTip";

const Acitivty=styled.div`
  width:853px;
  height:320px;
  background-color:#FBFBFB;
  padding:20px;
  border-radius:5px;
`
const Head=styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:40px;
`
const P=styled.p`
  font-family:Roboto;
  font-size:15;
  font-weight:500;
  margin:24px;
`
const Unit=styled.div`
  width:8px;
  height:8px;
  border-radius: 50%;
  background-color:${(props)=>props.color};
  margin-top:5px;
  margin-right:5px
`
const Units=styled.div`
  display:flex;
  justify-content: space-between;
  margin-top:24px;
`
const Text=styled.p`
  color:rgba(116, 121, 140, 1);
  font-family:Roboto;
  font-size:14px;
  font-weight:500;
  margin:0 5px;
  
`

const UserActivity=()=>{
  const[data,setData]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    const getData=async()=>{
      const req=await getUserActivity(id)
      if(!req) return alert('faild to get data')
      setData(req.data.sessions)
    }
    getData();
  },[id])
  if(data.length===0) return null
  for(let i=0;i<data.length;i++){data[i].day=i+1}
  return (
    <Acitivty>
      <Head>
        <P>Activité quotidienne</P>
        <Units>
          <Unit color="#282D30"></Unit>
          <Text>Poids (kg)</Text>
          <Unit color="#E70904"></Unit>
          <Text>Calories brûlées (kCal)</Text>
        </Units>
      </Head>
      <BarChart width={853} height={200} data={data} barGap={8} barCategoryGap={1}>
        <CartesianGrid vertical={false} strokeDasharray="1 1"/>
        <XAxis dataKey="day" tickLine={false} tick={{fontSize:14,storke:"#9B9EAC"}}/>
        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin-2','dataMax+1']} tickCount="3" tickLine={false} axisLine={false}tick={{fontSize: 14, stroke:'#9B9EAC'}} orientation={"right"} dx={15}/>
        <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true}/>
        <Tooltip content={<CustomToolTip/>}/>
        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
      </BarChart>
    </Acitivty>
  )
}

export default UserActivity