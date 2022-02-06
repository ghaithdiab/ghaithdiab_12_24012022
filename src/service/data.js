import axios from 'axios'

/**
 * Get User Info
 * @param {id} user id 
 * @returns {object}
 */
export const getUserInfo=async(id)=>{
    try{
      const res=await axios.get(`http://localhost:3000/user/${id}`)
      return res.data
    }
    catch(e){
      console.log(e)
    }
}

/**
 * Get User Activity
 * @param {id} User id 
 * @returns {object}
 */
export const getUserActivity=async(id)=>{
  try{
      const req=await axios.get(`http://localhost:3000/user/${id}/activity`)
      return req.data
  }
  catch(e){
    console.log(e)
  }
}

/**
 * Get User Average Duration sessions
 * @param {id} User id 
 * @returns {object} 
 */
export const getAverageSessions=async(id)=>{
  try{
    const req=await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    return req.data
  }
  catch(e){
    console.log(e)
  }
}

/**
 * Get user Performances
 * @param {id} User id
 * @returns {object}
 */
export const getPerformances=async(id)=>{
  try{
    const req=await axios.get(`http://localhost:3000/user/${id}/performance`)
    return req.data
  }
  catch(e){
    console.log(e)
  }
}