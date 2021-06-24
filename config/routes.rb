Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :parks, param: :park_code
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#home', via: :all
end
