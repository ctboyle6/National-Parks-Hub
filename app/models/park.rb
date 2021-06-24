class Park < ApplicationRecord
  has_many :reviews

  def avg_score
    reviews.average(:rating).round(2).to_f
  end
end
