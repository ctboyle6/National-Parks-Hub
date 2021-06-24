class ParkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :latitude, :longitude, :park_code

  has_many :reviews
end
