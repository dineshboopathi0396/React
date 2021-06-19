const API_KEY = "65d8098ab2a67efbba05b71c8552dd50";

const requests = {
    fetchTrendingNow: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchSciFic: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;