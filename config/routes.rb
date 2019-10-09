# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  namespace :api, defaults: { format: 'json' } do
    resources :moods, only: [:index, :create]
  end

  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]

  mount ActionCable.server => '/cable'

  root 'page#index'
end
