top50AnimeURL = 'https://api.jikan.moe/v3/top/anime'; 
allAnimeRecentlyReleasedURL = 'https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc';
userURL = "http://localhost:3000/users"
const top50anime = document.querySelector('section')
const sideCard = document.querySelector('side-bar2')


const signIn = document.getElementById('btn')
const modal = document.getElementById('myModal')
const closer = document.getElementsByClassName('close')[0]



fetch(top50AnimeURL)
    .then(parseJSON)
    .then(displayTop50);

function displayTop50(animes) {
    animes.top.forEach(showAnime);
}

function showAnime(anime) {
   const animeCard = createAnimeCard();
   const name = createAnimeName(anime);
   const ranking = createAnimeRanking(anime);
   const cover = createImage(anime);
   const  synopsis = createAnimeSynop(anime);

    
    animeCard.append(ranking, name, cover)
    top50anime.append(animeCard)
    sideCard.append(synopsis)
    // document.body.append(top50anime)
} 

function createAnimeCard() { 
  const animeCard=  document.createElement('div');
  animeCard.classList.add("cardR");
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

function createAnimeSynop ({synopsis}) {
  const synop = document.createElement('p');
  synop.classList.add('synopsis');
  synop.textContent = synopsis;
  return synop
}

    // When the user clicks on the button, open the modal
    signIn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      closer.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    
  

     function  parseJSON(response) {
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




