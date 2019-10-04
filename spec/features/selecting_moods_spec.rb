require "rails_helper"


RSpec.feature "Selecting Moods", type: :feature do
  xscenario "User can select Happy and it is displayed" do
    visit "/users/sign_up"
    fill_in "user[email]", with: "test@gmail.com"
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "123456"
    click_button "Sign up"
    find_by_id("happy").click
    expect(page.find_by_id("happy-count")).to have_text(1)
  end
end
