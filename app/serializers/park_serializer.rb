class ParkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :latitude, :longitude, :park_code, :avg_rating

  has_many :reviews
end
