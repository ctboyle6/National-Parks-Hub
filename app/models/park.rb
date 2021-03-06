class Park < ApplicationRecord
  has_many :reviews, dependent: :destroy

  def avg_rating
    return 0 unless reviews.count.positive?

    reviews.average(:rating).round(2).to_f
  end
end
