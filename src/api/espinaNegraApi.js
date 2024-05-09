import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

//VITE_API_BELVO="https://development.belvo.com";


const { VITE_API_BELVO } = getEnvVariables();

const espinaNegraApi = axios.create({
  baseURL: VITE_API_BELVO,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ZTU1MjE2ZGUtM2I5OC00MTMyLWFmMjQtMzJiMGVhMTZmOTMyOjJsLTUjZlZLRXc0eGtTUUtZcUFwQHYyd2xuck9GT0ZRdFJveEd4MUVzZkZtOE1FVkJSSFBqaVZocHFTN0N6M3g='
  }
});
export default espinaNegraApi;


