import { User } from '../../Core/Models/user.models';

export const userMapper = (user:any) => {
  const userMapping: User = {
    name: user.data.name,
    lastName: user.data.complementName,
    rol: user.data.rol,
    gender: user.data.gender
  }

  return userMapping

}