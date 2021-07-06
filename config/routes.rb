Rails.application.routes.draw do
  devise_for :users
  # devise_scope :user do 
  #   get "/users/sign_out", to: "devise/sessions#destroy"
  #   get "/guest/sign_in", to: "sessions#guest"
  # end

  root 'pages#index'

  namespace :api, defaults: { format: json } do
    namespace :v1 do
      resources :reviews, only: [ :update, :destroy ]
      resources :parks, param: :park_code, only: [ :index, :show ] do
        resources :reviews, only: [ :index, :create ]
      end
    end
  end

  get '*path', to: 'pages#index', via: :all
end
