class AddingFieldToComment < ActiveRecord::Migration[5.1]
  def change
    change_table :comments do |t|
      t.integer :card_id, nil: false
    end
  end
end
