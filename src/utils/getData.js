import axios from "axios";



export const exerciseOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '86981605a9mshfe219656c1d0376p1227cdjsn63d04a5e0e43',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '86981605a9mshfe219656c1d0376p1227cdjsn63d04a5e0e43',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}











