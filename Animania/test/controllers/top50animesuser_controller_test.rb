require 'test_helper'

class Top50animesuserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get top50animesuser_index_url
    assert_response :success
  end

end
