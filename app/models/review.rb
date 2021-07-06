class Review < ApplicationRecord
  belongs_to :park

  validates :title, :description, presence: true
end
