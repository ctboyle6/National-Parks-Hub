Rails.application.routes.draw do
  devise_for :users
  # devise_scope :user do 
  #   get "/users/sign_out", to: "devise/sessions#destroy"
  #   get "/guest/sign_in", to: "sessions#guest"
  # end

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
