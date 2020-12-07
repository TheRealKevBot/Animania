class AnimesController < ApplicationController
  
  def index
    response = RestClient.get ("https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=title&sort=asce")
    result = JSON.parse response

    render json: result['results']
  end

end
