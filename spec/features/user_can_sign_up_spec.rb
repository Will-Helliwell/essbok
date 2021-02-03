require 'rails_helper'
require_relative 'sign_up_login_helper'

RSpec.feature "New User", type: :feature do
  scenario "Can sign up and be directed to posts" do
    visit root_path
    sign_up_stephen
    expect(current_path).to eq posts_path
    expect(page).to have_content "Logged in as stephen@test.com."
  end

  scenario "Can't sign up with password shorter than 6 characters" do
    visit root_path
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "short"
    click_button "Create Account"
    expect(current_path).to eq("/users")
    expect(page).to have_content "Password string is too short (minimum is 6 characters)"
  end

  scenario "Can't sign up with password longer than 10 characters" do
    visit root_path
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "verylongpassword"
    click_button "Create Account"
    expect(current_path).to eq("/users")
    expect(page).to have_content "Password string is too long (maximum is 10 characters)"
  end

  scenario "Can't sign up with same email twice" do
    visit root_path
    sign_up_stephen
    logout
    sign_up_stephen
    expect(current_path).to eq users_path
    expect(page).to have_content "Email has already been taken"
  end
end
