Rails.application.routes.draw do
  resources :users
  resources :favorites
  resources :animes, only: [:index]
  resources :top50animes, only: [:index]
  resources :top50animesuser, only: [:index]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
