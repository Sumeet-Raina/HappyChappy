# frozen_string_literal: true

require 'rails_helper'

RSpec.feature 'Index', type: :feature do
  describe 'Mood Page' do
    scenario 'Can see welcome page' do
      visit('/')
      expect(page).to have_content('Hello.How are you feeling today?')
    end
    scenario 'Can see good mood option' do
      visit('/')
      expect(page).to have_content('good')
    end
    scenario 'Can see bad mood option' do
      visit('/')
      expect(page).to have_content('bad')
    end
    scenario 'Can see okay mood option' do
      visit('/')
      expect(page).to have_content('okay')
    end
    scenario 'Can see silly mood option' do
      visit('/')
      expect(page).to have_content('silly')
    end
  end
end
