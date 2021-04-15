const animesDropDown = document.querySelector('#favorite')

fetch('http://localhost:3000/favorites')
    .then(response => response.json())
    .then(favAnimes => {
        favAnimes.forEach(favorite => {
            const option = document.createElement('option')
            option.textContent = favorite.name
            option.value = favorite.id

            animesDropDown.append(option)
        })
    })