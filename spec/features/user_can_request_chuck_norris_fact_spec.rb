require "rails_helper"


RSpec.feature "Entertainment", type: :feature do
  describe "Random Chuck Norris Fact" do
    scenario "Can request to see a Random Chuck Norris Fact" do
      visit "/users/sign_up"
      fill_in "user[email]", with: "test@gmail.com"
      fill_in "user[password]", with: "123456"
      fill_in "user[password_confirmation]", with: "123456"
      click_button "Sign up"
      expect(page).to have_button("More Chuck Fact Please!")
    end
  end
end
