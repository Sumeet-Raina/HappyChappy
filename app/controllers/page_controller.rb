class PageController < ApplicationController
  def index
    render component: 'Index'
  end
end
