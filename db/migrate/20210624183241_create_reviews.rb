class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.integer :rating
      t.belongs_to :park, null: false, foreign_key: true

      t.timestamps
    end
  end
end
