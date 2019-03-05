class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list, foreign_key: 'list_id', class_name: 'List', required: true
end
