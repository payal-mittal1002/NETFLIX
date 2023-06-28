import React from 'react'

import Row from '../Row'
import axios from "axios"
import { useEffect, useState } from 'react'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
const link = "https://api.themoviedb.org/3";
;
const apikey="4caa9eaf1bc2aaac18098c4f8926e6a5";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgurl="https://image.tmdb.org/t/p/original";



const Home = () => {
  const [upcomingmovies, setupcomingmovies] = useState([]);
  const [nowPlayingmovies, setnowPlayingmovies] = useState([]);
  const [popularmovies, setpopularmovies] = useState([]);
  const [topRatedmovies, settopRatedmovies] = useState([]);
  useEffect(() => {
    const fetchupcomingmovies = async () => {
      const { data:{results}} = await axios.get(`${link}/movie/${upcoming}?api_key=${apikey}`);
      setupcomingmovies(results);
    };
   
    const fetchnowPlayingmovies = async () => {
      const { data:{results}} = await axios.get(`${link}/movie/${nowPlaying}?api_key=${apikey}`);
      
      setnowPlayingmovies(results);
    };
   
    const fetchpopularmovies = async () => {
      const { data:{results}} = await axios.get(`${link}/movie/${popular}?api_key=${apikey}`);
      
      setpopularmovies(results);
    };
    
    const fetchtopRatedmovies = async () => {
      const { data:{results}} = await axios.get(`${link}/movie/${topRated}?api_key=${apikey}`);
      
      settopRatedmovies(results);
    };
    fetchupcomingmovies();
    fetchnowPlayingmovies();
    fetchpopularmovies();
    fetchtopRatedmovies();
  }, [])

  return (
    <section>
     <div
                className="Banner"
                style={{
                    backgroundImage: popularmovies[0]
                        ? `url(${`${imgurl}/${popularmovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularmovies[0] && <h1>{popularmovies[0].original_title}</h1>}
                {popularmovies[0] && <p>{popularmovies[0].overview}</p>}

                <div className='btn'>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
            </div>
      <Row title={"Rated Movies"} arr={upcomingmovies} />
      <Row title={"Favorite Movies"} arr={nowPlayingmovies} />
      <Row title={"WatchList"} arr={popularmovies} />
      <Row title={"Movie List"} arr={topRatedmovies} />

    </section>
  )
}

export default Home