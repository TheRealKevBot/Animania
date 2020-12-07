class Top50animesController < ApplicationController
  
  def index
    response = RestClient.get ("https://api.jikan.moe/v3/top/anime")
    result = JSON.parse response

    render json: result['top']
  end

end
