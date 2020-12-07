class Top50animesuserController < ApplicationController
  
  def index
    response = RestClient.get ("https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1")
    result = JSON.parse response

    render json: result['results']
  end

end
