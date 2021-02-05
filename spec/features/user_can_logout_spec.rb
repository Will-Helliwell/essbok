require 'rails_helper'

RSpec.feature "Logging out", type: :feature do
  scenario "User can logout" do
    visit root_path
    sign_up_stephen
    logout
    expect(current_path).to eq root_path
    expect(page).to have_content 'Hej, velkommen to Essbok!'
  end
end
