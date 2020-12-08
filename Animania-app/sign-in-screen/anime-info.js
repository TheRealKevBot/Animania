const searchParams = new URLSearchParams(window.location.search) 
const mal_id = searchParams.get('id') 

fetch(`https://api.jikan.moe/v3/anime/${mal_id}`)
    .then(response => response.json())
    .then(anime => {
        const animeName = document.querySelector('h1')
        animeName.textContent = `Title: ${anime.title_english}`

        const animeImg = document.querySelector('img')
        animeImg.src = anime.image_url
        animeImg.alt = anime.title_english

        const animeTrailer = document.querySelector('iframe')
        animeTrailer.src = `${anime.trailer_url} + &autoplay=0`
        animeTrailer.alt = `${anime.title_english} trailer`

        const animeRank = document.querySelector('h2')
        animeRank.textContent = `Ranked: # ${anime.rank}`

        const animeScore = document.querySelector('h3')
        animeScore.textContent = ` Rated: ${anime.score} from ${anime.scored_by} Users`

        const animeRating = document.querySelector('h4')
        animeRating.textContent = `Rating: ${anime.rating}`

        const animeEpisodes = document.querySelector('h5')
        animeEpisodes.textContent = `Episodes: ${anime.episodes}, ${anime.duration}isode`

        const animeStatus = document.querySelector('h6')
        animeStatus.textContent = `Status: ${anime.status}`

        const animeSynopsis = document.querySelector('p')
        animeSynopsis.textContent = `Synopsis: ${anime.synopsis}`

        document.body.append(
            animeName, 
            animeImg,
            animeTrailer, 
            animeRank, 
            animeScore, 
            animeRating, 
            animeEpisodes, 
            animeStatus, 
            animeSynopsis
            )
    })