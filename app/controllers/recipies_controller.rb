class RecipiesController < ApplicationController
  def search
    respond_to do |format|
      format.json { render json: { recipies: Recipe.search(params[:prefix]) } } 
    end 
  end
end
