Rails.application.routes.draw do

  devise_for :users

  namespace :api, defaults: { format: 'json' } do
    resources :moods, only: [:index, :create]
  end
  
  root 'page#index'

end
