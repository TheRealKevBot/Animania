const searchParams = new URLSearchParams(window.location.search) 
const mal_id = searchParams.get('id') 

fetch(`https://api.jikan.moe/v3/anime/${mal_id}`)
    .then(response => response.json())
    .then(anime => {
        const animeName = document.createElement('h1')
        animeName.textContent = `Title: ${anime.title_english}`

        const animeRank = document.createElement('h2')
        animeRank.textContent = `Ranked: # ${anime.rank}`

        const animeScore = document.createElement('h3')
        animeScore.textContent = ` Rated: ${anime.score} from ${anime.scored_by} Users`

        const animeRating = document.createElement('h4')
        animeRating.textContent = `Rating: ${anime.rating}`

        const animeEpisodes = document.createElement('h5')
        animeEpisodes.textContent = `Episodes: ${anime.episodes}, ${anime.duration}`

        const animeSynopsis = document.createElement('p')
        animeSynopsis.textContent = `Synopsis: ${anime.synopsis}`

        document.body.append(animeName, animeRank, animeScore, animeRating, animeEpisodes, animeSynopsis)
    })