require 'test_helper'

class AnimesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get animes_index_url
    assert_response :success
  end

end
