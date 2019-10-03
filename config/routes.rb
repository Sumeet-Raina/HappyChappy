Rails.application.routes.draw do

  devise_for :users

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: [:index, :create]
  end
  
  root 'page#index'

end
