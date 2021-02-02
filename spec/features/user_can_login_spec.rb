require 'rails_helper'

RSpec.feature "Logging in", type: :feature do
  scenario "User can login" do
    visit "/"
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "stephen"
    click_button "Create Account"
    click_link "Log-out"
    click_link "Log-in"
    fill_in "email", with: "stephen@test.com"
    fill_in "password", with: "stephen"
    click_button "Submit"
    expect(current_path).to eq posts_path
    expect(page).to have_content 'Logged in as stephen@test.com.'
  end

  scenario "User must use correct email" do
    visit "/"
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "stephen"
    click_button "Create Account"
    click_link "Log-out"
    click_link "Log-in"
    fill_in "email", with: "wrong@email.com"
    fill_in "password", with: "stephen"
    click_button "Submit"
    expect(current_path).to eq sessions_create_path
    expect(page).to have_content 'Email or password is invalid'
  end

  scenario "User must use correct password" do
    visit "/"
    click_link "Sign-up"
    fill_in "user[username]", with: "Stephen"
    fill_in "user[email]", with: "stephen@test.com"
    fill_in "user[password_string]", with: "stephen"
    click_button "Create Account"
    click_link "Log-out"
    click_link "Log-in"
    fill_in "email", with: "stephen@test.com"
    fill_in "password", with: "wrongpassword"
    click_button "Submit"
    expect(current_path).to eq sessions_create_path
    expect(page).to have_content 'Email or password is invalid'
  end
end
