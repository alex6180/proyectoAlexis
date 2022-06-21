import { environment } from "../../../Core/Environments/Environment";

/*********************/
/*  DEV ENVIRONMENT  */
/*********************/

const DEV = {
  REQUEST_URL: "http://127.0.0.1:3000",
  EPS: [
    "Famisanar",
    "E.P.S. Sanitas",
    "Cafesalud",
    "Salud Total",
    "Salud Colmena",
  ],
  EstadoCivil: ["Soltero", "Casado", "Divorciado", "Union libre", "Viudo"],
  TipoSangre: ["A+", "A-", "B+", "B-", "O-", "O+"],
  Sexo: ["Hommbre", "Mujer"],
  TipoDocumento: ["TI", "CC", "RC", "Pasaporte"],
};

/*********************/
/*  PROD ENVIRONMENT  */
/*********************/

const PROD = {
  REQUEST_URL: "https://127.0.0.1:3000",
  EPS: [
    "Famisanar",
    "E.P.S. Sanitas",
    "Cafesalud",
    "Salud Total",
    "Salud Colmena",
  ],
  EstadoCivil: ["Soltero", "Casado", "Divorciado", "Union libre", "Viudo"],
  TipoSangre: ["A+", "A-", "B+", "B-", "O-", "O+"],
  Sexo: ["Hommbre", "Mujer"],
  TipoDocumento: ["TI", "CC", "RC", "Pasaporte"],
};

export const CONSTANTS = environment.production === true ? PROD : DEV;
