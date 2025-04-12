export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    },
} 

export const fetchMovies = async ({ query }: {query: string}) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; 
    

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`)

    }

    const data = await response.json();

    return data.results;
}






// /discover/movie
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzM4ODk1NzI5NjlhY2FlODkzNWVjMjNkYWIyYTFiZiIsIm5iZiI6MTc0Mzk2OTUzMS4wNzMsInN1YiI6IjY3ZjJkY2ZiMmY3ZDQzNzAyNzk5ZWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rvKrx8VPVsIbDFfNn7OhT_GVgrR10MsuETaHit7AFYs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));