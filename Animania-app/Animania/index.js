allAnimeRecentlyReleasedURL = 'https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc';
userURL = "http://localhost:3000/users"
const top50anime = document.querySelector('.background2')
const sideCard = document.querySelector('side-bar2')

top50AnimeURL = 'http://localhost:3000/top50animes'; 
top50AnimeuserURL = 'http://localhost:3000/favorites'; 
animeURL = 'http://localhost:3000/animes'; 


const signIn = document.getElementById('btn')
const modal = document.getElementById('myModal')
const closer = document.getElementsByClassName('close')[0]

fetch(top50AnimeURL)
    .then(parseJSON)
    .then(displayTop50);

function displayTop50(animes) {
  console.log(animes)
    animes.forEach(showAnime);
}

function showAnime(anime) {
   const animeCard = createAnimeCard(anime);
   const name = createAnimeName(anime);
   const ranking = createAnimeRanking(anime);
   const cover = createImage(anime);
   

    
    animeCard.append(ranking, name, cover)
    top50anime.append(animeCard)
    // sideCard.append(synopsis)
    // document.body.append(top50anime)
} 

function createAnimeCard (anime) { 
  const animeCard =  document.createElement('div');
  animeCard.classList.add("cardR");
  animeCard.id = "sider"

  animeCard.innerHTML =`<a href="#sider">Go to choice</a>`

  animeCard.addEventListener('click', () => {
    console.log('this is me', anime)

    const selecttedAnimeImage = document.querySelector('.side-bar2 > img')
    selecttedAnimeImage.src = anime.image_url;
    selecttedAnimeImage.alt = anime.name;

    const selectedAnimeName = document.querySelector('.side-bar2 > h1')
    selectedAnimeName.textContent= anime.title;

    const selectedAnimeScore = document.querySelector('.side-bar2 > h2')
    selectedAnimeScore.textContent= `Rating: ${anime.score}`;

    const selectedAnimeMembers = document.querySelector('.side-bar2 > h3')
    selectedAnimeMembers.textContent= `Members: ${anime.members}`;

    const selectedAnimeSynop = document.querySelector('.side-bar2 > p')
    selectedAnimeSynop.innerHTML = `<a href='anime-info.html?id=${anime.mal_id}'>Learn More Here!</a>` 
    
    
  })
  return animeCard;
} 

function createAnimeRanking({ rank }) {
  const ranking = document.createElement('h2');
  ranking.textContent = rank; 
  return ranking
}
function createAnimeName ( { title }){
  const name = document.createElement('h3');
  name.textContent = title;
  return name
}

function createImage({image_url, title}) {
  const cover = document.createElement('img')
    cover.src = image_url;
    cover.alt = title; 
    return cover
    
}

function createAnimeSynop ({ synopsis }) {
  const synop = document.createElement('p');
  synop.classList.add('synopsis');
  synop.textContent = synopsis;
  return synop
}

// // When the user clicks on the button, open the modal
// signIn.onclick = function() {
//   modal.style.display = "block";
// }
  
//   // When the user clicks on <span> (x), close the modal
// closer.onclick = function() {
//   modal.style.display = "none";
// }
  
//   // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

     function  parseJSON(response) {
       return response.json();
     }
// fetch(userURL)
//   .then(parseJSON)
//   .then (accessUsers);

function parseJSON(response) {
  return response.json();
}


// fetch(top50AnimeURL)
//     .then(response => response.json())
//     .then(animes => {
//         console.log(animes)
//         animes.top.forEach(anime => {
//             console.log(anime)
//             const animeCard = document.createElement('div')
    
//             const name = document.createElement('h2')
//             name.textContent = anime.title 

//             const ranking = document.createElement('h3')
//             ranking.textContent = anime.rank

//             const cover = document.createElement('img')
//             cover.src = anime.image_url
//             cover.alt = anime.title 
            
//             animeCard.append(name, ranking, cover)
//             top50anime.append(animeCard)
//             document.body.append(top50anime)
//         })
//     })




