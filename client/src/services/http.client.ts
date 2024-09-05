import { API_BASE_URL } from "../config";

export const POST = async (URL: string, OPTIONS: RequestInit) => {
  const data = await fetch(API_BASE_URL + URL, OPTIONS);
  if(data.status>=400) {
    throw data
  }

  return data;
}