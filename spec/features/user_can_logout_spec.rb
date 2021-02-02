require 'rails_helper'

RSpec.feature "Logging out", type: :feature do
  scenario "User can logout" do
    visit "/"
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "stephen"
    click_button "Create Account"
    click_link "Log-out"
    expect(current_path).to eq root_path
    expect(page).to have_content 'Hej, welcome to Essbok!'
  end
end
