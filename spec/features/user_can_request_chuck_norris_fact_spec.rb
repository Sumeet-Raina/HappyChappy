require "rails_helper"


RSpec.feature "Entertainment", type: :feature do
  describe "Random Chuck Norris Fact" do
    scenario "Can request to see a Random Chuck Norris Fact" do
      visit("/")
      expect(page).to have_button('More Chuck Facts Please!')
    end
  end
end
