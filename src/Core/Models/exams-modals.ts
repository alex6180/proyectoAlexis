import { ExamsInfo } from "./exams";

export interface PacientInfo {
  Nombres: string;
  Apellidos: string;
  TipoDocumento: string;
  NumeroDocumento: number;
  FechaNacimiento: string;
  Sexo: string;
  TipoSangre: string;
  EstadoCivil: string;
  EPS: string;
  NombresContactoEmergencia: string;
  ApellidosContactoEmergencia: string;
  Parentesco: string;
  TelefonoContacto: number;
  exams: Array<ExamsInfo>;
}
