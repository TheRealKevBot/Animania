class UsersController < ApplicationController

    def index
        @users = User.all 

        render json: @users, include: :favorite
    end 

    def show 
        @user = User.find(params[:id])

        render json: @user, include: :favorite
    end 

    def create
        @newUser = User.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            user_name: params[:user_name],
            passphrase: params[:passphrase],
            favorite_id: params[:favorite_id]
        )

        byebug

        render json: @newUser
        # redirect_to 'http://localhost:3001/'
    end 
    
end
