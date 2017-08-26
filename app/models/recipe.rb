class Recipe < ApplicationRecord
  @@api = RecipePuppyApi.new
	 
  def self.search(prefix)
    recipies = @@api.get_recipies_by_name(prefix, {})
  end
end
