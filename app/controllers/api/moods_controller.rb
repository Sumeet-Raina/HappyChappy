module API
  class MoodsController < ApplicationController
    def index
      moods = current_user.moods.all
      render json: {
        happy: countMood(moods, "happy"),
        sad: countMood(moods, "sad"),
        okay: countMood(moods, "okay"),
        silly: countMood(moods, "silly"),
        currentMood: checkCurrentMood
      }
    end

    def create
      if todays_mood
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

      def checkCurrentMood
        if todays_mood?
          Mood.last.mood_type
        else
          ""
        end
      end

      def todays_mood?
        Mood.last.created_at.to_date == Date.today
      end
  end
end
