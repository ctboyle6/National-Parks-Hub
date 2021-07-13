class SessionsController < Devise::SessionsController
    def guest
      @user = User.find_by(email: "guest@gmail.com")
      sign_in(@user)
      redirect_to root_path
    end
  end 