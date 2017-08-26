class RecipiesController < ApplicationController
  def search
    respond_to do |format|
      recipes = Recipe.search(params[:prefix])
      format.json { render json: { recipies: (recipes.count > 20 ? recipes[0..19] : recipes)} } 
    end 
  end
end
