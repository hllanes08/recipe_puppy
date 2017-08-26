require 'httparty'
require 'json'

class RecipePuppyApi
  include HTTParty
  base_uri 'www.recipepuppy.com'
  default_timeout 100

  def base_path
     "/api/?"
  end

  def handle_timeouts
    begin
      yield
    rescue Net::OpenTimeout, Net::ReadTimeout
      {}
    end
  end

  def get_recipies_by_name(recipie_prefix, options)
    handle_timeouts do
      url = "#{base_path}q=#{recipie_prefix}"
      response = self.class.get(url, options)
      recipes = JSON.parse(response.body)
      recipes['results'].each do |recipe|
        #Just in case we want save api response
        #Recipe.create(title: recipe['title'], href: recipe['href'], ingredients: recipe['ingredients'].split(','))
      end
      recipes['results']
    end
  end
end
