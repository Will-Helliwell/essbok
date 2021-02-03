def sign_up_stephen
  click_link "Sign-up"
  fill_in "user[username]", with: "Stephen"
  fill_in "user[email]", with: "stephen@test.com"
  fill_in "user[password_string]", with: "stephen"
  click_button "Create Account"
end

def logout
  click_link "Log-out"
end

def login_stephen
  click_link "Log-in"
  fill_in "email", with: "stephen@test.com"
  fill_in "password", with: "stephen"
  click_button "Submit"
end
