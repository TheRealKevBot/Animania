# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

response = RestClient.get ("https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1")
result = JSON.parse response
api_animes = result['results']


api_animes.each do |api_anime|
    puts api_anime['title']
    @newAnime = Favorite.create(
        name: api_anime['title'],
        user_rating: api_anime['score']
    )
end