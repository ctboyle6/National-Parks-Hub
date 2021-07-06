Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :parks, param: :park_code do
        resources :reviews, only: [ :index, :create ]
      end
      resources :reviews, only: [ :destroy ]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
