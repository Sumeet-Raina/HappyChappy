module API
  class MoodsController < ApplicationController
    def index
      moods = current_user.moods.all
      happy_count = moods.count { |mood| mood.mood_type == "happy" }
      sad_count = moods.count { |mood| mood.mood_type == "sad" }
      okay_count = moods.count { |mood| mood.mood_type == "okay" }
      silly_count = moods.count { |mood| mood.mood_type == "silly" }
      render json: { happy: happy_count, sad: sad_count, okay: okay_count, silly: silly_count }
    end

    def create
      if Mood.last.created_at.to_date == Date.today
        mood = Mood.last.update(mood_type: params[:currentMood])
      else
        mood = Mood.create(user_id: current_user.id, mood_type: params[:currentMood])
      end

      render json: { mood: mood }
    end
  end
end
