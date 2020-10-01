const API_KEY = '2260586fb0e5e8267be6ea8854149076';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}
//  https://api.themoviedb.org/3/movie/550?api_key=2260586fb0e5e8267be6ea8854149076