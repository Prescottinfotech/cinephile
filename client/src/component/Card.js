import react,{useState} from "react";
import Youtube from 'react-youtube'
import './card.css';
import movieTrailer from 'movie-trailer'
const Card=(movie)=>{
    const [trailerUrl, setTrailerUrl] = useState("");
    let img_path="https://image.tmdb.org/t/p/w500";
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.info.title||"")
            .then((url)=>{const urlParams=new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
            })
            .catch(()=>console.log('Temporary Unavailable'))
        }
    }
    return(
        <>
      
            <div className="movie"  onClick={()=>handleClick(movie)}>
                <img src={img_path+movie.info.poster_path} className="poster"  ></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {movie.info.overview}
                    </div>
                    
                </div>
                
                
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </>
    )
}
export default Card;
