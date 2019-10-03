require "rails_helper"


RSpec.feature "Entertainment", type: :feature do
  describe "Random Meme" do
    scenario "Can request to see a Meme" do
      visit("/")
      expect(page).to have_button('One More Meme Please!')
    end
  end
end
