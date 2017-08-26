require 'test_helper'

class RecipiesControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get recipies_search_url
    assert_response :success
  end

end
