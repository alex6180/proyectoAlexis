import { doGet } from '../../Http/request.http';
import { userMapper } from '../../Mapper/User.mapper';

export const loginUser = async ({user, pass}:any) => {
  try{
    const result = await doGet('login');
    return userMapper(result);
  }catch(err){
    console.log("faile login user", err)
  }
}