import axios from 'axios';
import { CONSTANTS } from '../../Presentation/Common/Constans/Constans';

export const doGet = async (complementUrl:string) =>{
  try{
    const url = `${CONSTANTS.REQUEST_URL} + ${complementUrl}`;
    const {data,status} = await axios.get(url);
    return {data, status}; 
  }catch(err){
    console.log("fail request get")
  }
}

export const doPost = async (complementUrl:string, headers:any) => {
  try{
    const url = `${CONSTANTS.REQUEST_URL} + ${complementUrl}`;
    const {data,status} = await axios.post(url, headers)
    return {data,status}
  }catch(err){
    console.log("fail request post")
  }
}
