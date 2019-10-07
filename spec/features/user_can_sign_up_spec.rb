# frozen_string_literal: true

require "rails_helper"

RSpec.feature "Sign up", type: :feature do
  scenario "Can sign up" do
    visit "/users/sign_up"
    fill_in "user[user_name]", with: "tester"
    fill_in "user[email]", with: "test@gmail.com"
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "123456"
    click_button "Sign up"
    expect(page).to have_content("How are you feeling today?")
  end

  scenario "Can not sign up if passwords do not match" do
    visit "/users/sign_up"
    fill_in "user[email]", with: "test@gmail.com"
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "1234567"
    click_button "Sign up"
    expect(page).to have_content("Password confirmation doesn't match Password")
  end

  scenario "Can not sign up if password is not 6 characters or more" do
    visit "/users/sign_up"
    fill_in "user[email]", with: "test@gmail.com"
    fill_in "user[password]", with: "1234"
    fill_in "user[password_confirmation]", with: "1234"
    click_button "Sign up"
    expect(page).to have_content("Password is too short (minimum is 6 characters")
  end

  scenario "Email must be populated" do
    visit "/users/sign_up"
    fill_in "user[email]", with: ""
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "123456"
    click_button "Sign up"
    expect(page).to have_content("Email can't be blank")
  end

  scenario "Email must be valid" do
    visit "/users/sign_up"
    fill_in "user[email]", with: "test.test"
    fill_in "user[password]", with: "123456"
    fill_in "user[password_confirmation]", with: "123456"
    click_button "Sign up"
    expect(page).to have_content("Sign up")
  end
end
