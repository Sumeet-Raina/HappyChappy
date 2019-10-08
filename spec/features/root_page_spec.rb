# # frozen_string_literal: true

# require "rails_helper"

# RSpec.feature "Index", type: :feature do
#   describe "Mood Page" do
#     before(:each) do
#       visit "/users/sign_up"
#       fill_in "user[email]", with: "test@gmail.com"
#       fill_in "user[password]", with: "123456"
#       fill_in "user[password_confirmation]", with: "123456"
#       click_button "Sign up"
#     end
#     scenario "Can see welcome page" do
#       expect(page).to have_current_path("/")
#       expect(page).to have_content("Hello.How are you feeling today?")
#     end
#     scenario "Can see good mood option" do
#       visit("/")
#       expect(page).to have_content("happy")
#     end
#     scenario "Can see bad mood option" do
#       visit("/")
#       expect(page).to have_content("sad")
#     end
#     scenario "Can see okay mood option" do
#       visit("/")
#       expect(page).to have_content("okay")
#     end
#     scenario "Can see silly mood option" do
#       visit("/")
#       expect(page).to have_content("silly")
#     end
#   end
# end
