# frozen_string_literal: true

class PageController < ApplicationController
  def index
    render component: 'Index'
  end
end
