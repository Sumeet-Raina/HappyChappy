require 'rails_helper'


RSpec.feature 'Index', type: :feature do

  describe 'A User' do
    scenario 'Can see happy emoticon' do
      visit('/')
      expect(page).to have_content('😊')
    end
  end
end