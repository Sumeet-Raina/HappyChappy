# frozen_string_literal: true

class User < ApplicationRecord
  include Gravtastic
  gravtastic
  has_many :moods
  validates :user_name, presence: true, length: { minimum: 4, maximum: 16 }
  # before_action :authenticate_user!
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
