class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.boolean :in_stock

      t.timestamps
    end
  end
end
