import { IChallenge } from "@/model/challenge"
import axios, {AxiosResponse} from "axios"
import { createHeader } from "./header"

export const getChallenges = async() => {

  const response: AxiosResponse<IChallenge[]> = await axios.get("http://localhost:8080/api/noauth/challenges",createHeader())

  if(response.status === 200) {
    return response.data
  }
  return [] 
}