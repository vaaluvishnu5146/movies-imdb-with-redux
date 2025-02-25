import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "../service/movie";

export default function MovieDetails() {
   const params =  useParams();

   useEffect(() => {
     if(params.movieId) {
        getMovieById(params.movieId).then((result) => {
            console.log(result)
        })
     }
   }, [params])
   
  return (
    <div>MovieDetails</div>
  )
}
