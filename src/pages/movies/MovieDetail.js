import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const {id} = useParams();
  const [movieDetail,setMovieDetail] = useState();
  useEffect(()=>{
    getData()
  })
  const getData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
      setMovieDetail(response.data);
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className="container text-white text-center">
        <div className="top-image ">
          <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path: ""}`} alt="" style={{width:"60%", height:"500px"}} />
          <h2 className='mt-3'>{movieDetail ? movieDetail.title: ""}</h2>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <h5>Revenue: {movieDetail ? movieDetail.revenue: ""}</h5>
          </div>
          <div className="col-6 text-end">
          <h5>Date: {movieDetail ? movieDetail.release_date: ""}</h5>
          </div>
        </div>
        <div className="description mt-4 mb-4">
          <p>{movieDetail ? movieDetail.overview: ""}</p>
        </div>
      </div>
    </>
  )
}

export default MovieDetail