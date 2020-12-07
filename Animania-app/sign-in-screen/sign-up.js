const animesDropDown = document.querySelector('#favorite')

fetch('http://localhost:3000/top50animesuser')
    .then(response => response.json())
    .then(animes => {
        animes.forEach(anime => {
            const option = document.createElement('option')
            option.textContent = anime.title
            option.value = favorite.id

            animesDropDown.append(option)
        })
    })