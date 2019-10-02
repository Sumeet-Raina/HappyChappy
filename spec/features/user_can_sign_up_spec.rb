require 'rails_helper'

RSpec.feature "Sign up", type: :feature do
  scenario "Can sign up" do
    visit "/users/sign_up"
    fill_in "user[email]", with: "test@gmail.com"
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "123456"
    click_button "Sign up"
    expect(page).to have_current_path("/")
    expect(page).to have_content("How are you feeling today?")
  end

  # cannot run this test until we can log out
  # scenario "Can log in" do
  #   visit "/users/sign_in"
  #   fill_in "user[email]", with: "test@gmail.com"
  #   fill_in "user[password]", with: "123456"
  #   click_button "Log in"
  #   expect(page).to have_content("Signed in successfully")
  # end
end