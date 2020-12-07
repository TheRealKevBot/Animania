class FavoritesController < ApplicationController

    def index
        @favorites = Favorite.all

        render json: @favorites
    end

    def show
        @favorite = Favorite.find(params[:id])

        render json: @favorite
    end 

    # def create
    #     response = RestClient.get ("https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1")
    #     result = JSON.parse response
    #     api_animes = result['results']

    #     list = []

    #     api_animes.each do |api_anime|
    #         # response = RestClient.get "https://api.jikan.moe/v3/anime/#{api_anime['mal_id']}"  
    #         # result = JSON.parse response
    #         @newAnime = Favorite.create(
    #             name: api_anime['title'],
    #             user_rating: api_anime['score']
    #         )
    #         list << @newAnime
    #     end

    #     render json: list
    # end

end
