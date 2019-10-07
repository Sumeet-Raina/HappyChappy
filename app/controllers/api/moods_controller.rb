module API
  class MoodsController < ApplicationController
    def index
      if new_user?
        render_new
      else
        render_moods
      end
    end

    def create
      if new_user? || no_mood_today?
        mood = Mood.create(user_id: current_user.id, mood_type: params[:currentMood])
      else
        mood = current_user.moods.last.update(mood_type: params[:currentMood])
      end
      render json: { mood: mood }
    end

    private
      def countMood(moods, emotion)
        moods.count { |mood| mood.mood_type == emotion }
      end

      def checkCurrentMood
        if no_mood_today?
          ""
        else
          current_user.moods.last.mood_type
        end
      end

      def no_mood_today?
        current_user.moods.last.created_at.to_date != Date.today
      end

      def new_user?
        current_user.moods.last == nil
      end

      def render_new
        render json: {
          happy: 0,
          sad: 0,
          okay: 0,
          silly: 0,
          currentMood: ""
        }
      end

      def render_moods
        moods = current_user.moods.all
        render json: {
          happy: countMood(moods, "happy"),
          sad: countMood(moods, "sad"),
          okay: countMood(moods, "okay"),
          silly: countMood(moods, "silly"),
          currentMood: checkCurrentMood
        }
      end
  end
end
