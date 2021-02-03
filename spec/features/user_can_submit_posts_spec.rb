require 'rails_helper'

TIMESTAMP = Time.now
FORMATTED_TIME = TIMESTAMP.strftime("%k:%M %d.%m.%y")

RSpec.feature "Timeline", type: :feature do

  xscenario "Can submit posts and view them" do
    visit root_path
    sign_up_stephen
    fill_in 'post[message]', with: "Hello, world!"
    click_button "Submit"
    click_button "getData"
    expect(page).to have_content("Hello, world!")
    expect(page).to have_content("Added at #{FORMATTED_TIME}")
    expect(page).to have_content("Added by Stephen")
  end
end
