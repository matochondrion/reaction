class Action < ApplicationRecord
  validates_presence_of :description, allow_blank: false
  belongs_to :card, foreign_key: 'card_id', class_name: 'Card', required: true

# controller: if has any of list of keys
  #
end
