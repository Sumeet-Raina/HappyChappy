module API
  class MoodsController < ApplicationController

    def index
      moods = "hi"
      render json: { moods: moods }
    end

    def create
      mood = "sup"
      render json: { mood: mood }
    end
  end
end