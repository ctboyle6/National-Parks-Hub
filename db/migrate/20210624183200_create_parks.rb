class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :park_code

      t.timestamps
    end
  end
end
