Rails.application.routes.draw do
  # root 'pages#index'
    # namespace :api do
    #   namespace :v1 do
      get 'services/index'
      post 'services/create'
      get '/show/:id', to: 'services#show'
      delete '/destroy/:id', to: 'services#destroy'
  #   end
  # end
  root 'pages#index'
  get '/*path' => 'pages#index'
  # get 'pages/index'
  # resources :services
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
