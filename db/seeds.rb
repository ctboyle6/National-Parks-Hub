require 'csv'

# tear down
puts "Clearing parks.."

Park.destroy_all

puts "Parks cleared."


#run db:seed from main project folder
filepath    = './db/parks.csv'
csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }

puts "Loading parks.."

CSV.foreach(filepath, csv_options) do |row|
  # Park.new(park_code: row[0], name: row[1])
  puts "#{row[0]} - name: #{row[1]}"
  if Geocoder.search("#{row[1]}").first.nil?
    next
  else
    coords = Geocoder.search("#{row[1]}").first.coordinates
    # puts "lat: #{coords[0]}"
    # puts "lon: #{coords[1]}"
    Park.create(park_code: row[0], name: row[1], latitude: coords[0], longitude: coords[1])
    puts "#{row[1]} created"
  end
end

# puts Geocoder.search("Yellowstone National Park").first.coordinates

puts "Parks loaded."

puts "Adding a few reviews.."

reviews = Review.create([
  {
    title: "Great trip",
    description: "This place had everything to offer.",
    rating: 5,
    park: Park.first
  },
  {
    title: "Worst park",
    description: "This is hell",
    rating: 1,
    park: Park.first
  },

])
