import axios from "axios";
import { environments } from 'constants/environments';

export const api = axios.create({
  baseURL: environments.URL_API_STAR_WARS,
  timeout: 4000,
});