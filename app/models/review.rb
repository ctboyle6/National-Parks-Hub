class Review < ApplicationRecord
  belongs_to :park
  belongs_to :user

  validates :title, :description, presence: true
end
