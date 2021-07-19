class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :rating, :park_id, :user_id
end
