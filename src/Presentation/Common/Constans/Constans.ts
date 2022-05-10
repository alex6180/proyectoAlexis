
import { environment } from '../../../Core/Environments/Environment';



/*********************/
/*  DEV ENVIRONMENT  */
/*********************/

const DEV = {
  REQUEST_URL: 'http://127.0.0.1:3000'
}

/*********************/
/*  PROD ENVIRONMENT  */
/*********************/

const PROD = {
  REQUEST_URL: 'https://127.0.0.1:3000'
}

export const CONSTANTS = environment.production === true ? PROD : DEV;