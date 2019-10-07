# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  namespace :api, defaults: { format: 'json' } do
    resources :moods, only: [:index, :create]
  end

  root 'page#index'
end
