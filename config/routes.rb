Rails.application.routes.draw do

  resources :user, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts

  root 'welcome#index'

  get "/users/new", to: "users#new"
  post "/users", to: "users#create"
  get 'sessions/new'
  post 'sessions/create'
  get 'sessions/destroy'
  get '/posts', to: "posts#index"
  get '/index_API', to: "posts#index_API"
  delete '/posts/delete/:id', to: "posts#destroy"
  post '/create_API', to: "posts#create_API"
  post '/posts/create', to: 'posts#create'
end
