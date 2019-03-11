class Comment < ApplicationRecord
  validates_presence_of :text, allow_blank: false
  belongs_to :card, foreign_key: 'card_id', class_name: 'Card', required: true
end
