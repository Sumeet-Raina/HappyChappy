require 'rails_helper'


RSpec.feature 'Index', type: :feature do

  describe 'A User' do
    scenario 'Can see welcome page' do
      visit('/')
      expect(page).to have_content('Hello. How are you feeling today?')
    end
  end
end