class AddNewFieldsToCardModel < ActiveRecord::Migration[5.1]
  def change
    change_table :cards do |t|
      t.boolean :archived, default: false
      t.boolean :completed, default: false
      t.float :position
    end
  end
end
