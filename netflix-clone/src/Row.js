import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    /*A snipet of code which runs on a specific condition/variable */
    useEffect(() => {
        // if [], run once when the row loads, and dont run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    const handleClick = (movie) => {
        console.log(movie);
        if (trailerUrl) {
            console.log("trailerUrl : " + trailerUrl);
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then(url => {
                    // https://www.youtube.com/watch?v=7Q17ubqLfaM
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {/* <img src="asdasd" alt="asdssss" /> */}
                {/* Several row posters */}
                {movies.map((movie) =>
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
