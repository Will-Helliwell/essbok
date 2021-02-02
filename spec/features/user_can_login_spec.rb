require 'rails_helper'

RSpec.feature "Logging in", type: :feature do
  scenario "User can login" do
    visit root_path
    sign_up_stephen
    logout
    login_stephen
    expect(current_path).to eq posts_path
    expect(page).to have_content 'Logged in as stephen@test.com.'
  end

  scenario "User must use correct email" do
    visit root_path
    sign_up_stephen
    logout
    click_link "Log-in"
    fill_in "email", with: "wrong@email.com"
    fill_in "password", with: "stephen"
    click_button "Submit"
    expect(current_path).to eq sessions_create_path
    expect(page).to have_content 'Email or password is invalid'
  end

  scenario "User must use correct password" do
    visit root_path
    sign_up_stephen
    logout
    click_link "Log-in"
    fill_in "email", with: "stephen@test.com"
    fill_in "password", with: "wrongpassword"
    click_button "Submit"
    expect(current_path).to eq sessions_create_path
    expect(page).to have_content 'Email or password is invalid'
  end
end
