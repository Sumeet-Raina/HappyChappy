require "rails_helper"


RSpec.feature "Entertainment", type: :feature do
  describe "Random Joke" do
    scenario "Can request to see a joke" do
      visit("/")
      expect(page).to have_button("More Jokes Please!")
    end
  end
end
