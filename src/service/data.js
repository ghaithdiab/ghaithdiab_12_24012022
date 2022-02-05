import axios from 'axios'


export const getUserInfo=async(id)=>{
    try{
      const res=await axios.get(`http://localhost:3000/user/${id}`)
      return res.data
    }
    catch(e){
      console.log(e)
    }
}

export const getUserActivity=async(id)=>{
  try{
      const req=await axios.get(`http://localhost:3000/user/${id}/activity`)
      return req.data
  }
  catch(e){
    console.log(e)
  }
}