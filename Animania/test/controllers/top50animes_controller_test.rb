require 'test_helper'

class Top50animesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get top50animes_index_url
    assert_response :success
  end

end
