# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def after_sign_out_path_for(resource_or_scope)
    if resource_or_scope == :user
      new_user_session_path
    else
      root_path
    end
  end
end
