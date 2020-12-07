class Top50animesController < ApplicationController
  
  def index
    response = RestClient.get ("https://api.jikan.moe/v3/top/anime")
    result = JSON.parse response

    render json: result['top']
  end

  # def index
  # response = RestClient.get ("https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1")
  # result = JSON.parse response
  # api_animes = result['results']

  # list = []

  # api_animes.each do |api_anime|
  #     @newAnime = Favorite.create(
  #         name: api_anime['title'],
  #         user_rating: api_anime['score']
  #     )
  #     list << @newAnime
  # end

  # render json: list
  # end



end
