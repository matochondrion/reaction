class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.integer :list_id, nil: false
      t.string :title, nil: false
      t.text :description
      t.datetime :due_date
      t.string :labels, array: true, default: []
      t.timestamps
    end
  end
end
