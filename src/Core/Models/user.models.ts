
export interface User {
  name: string;
  lastName: string;
  rol: UserRol
  gender: UserGender;
}

interface UserRol {
  admin: string;
  doctor: string;
  patient: string;
}

interface UserGender {
  male: string;
  female: string;
}