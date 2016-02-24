class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :upvotes
      t.string :author
      t.belongs_to :post, index: true

      t.timestamps null: false
    end
  end
end
