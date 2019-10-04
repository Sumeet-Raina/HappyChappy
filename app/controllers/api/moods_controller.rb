module API
  class MoodsController < ApplicationController
    def index
      moods = current_user.moods.all
      render json: {
        happy: countMood(moods, "happy"),
        sad: countMood(moods, "sad"),
        okay: countMood(moods, "okay"),
        silly: countMood(moods, "silly")
      }
    end

    def create
      if Mood.last.created_at.to_date == Date.today
        mood = Mood.last.update(mood_type: params[:currentMood])
      else
        mood = Mood.create(user_id: current_user.id, mood_type: params[:currentMood])
      end
      render json: { mood: mood }
    end

    private
      def countMood(moods, emotion)
        moods.count { |mood| mood.mood_type == emotion }
      end
  end
end
