module API
  class MoodsController < ApplicationController
    def index
      moods = "hi"

      render json: { moods: moods }
    end

    def create
    end
  end
end