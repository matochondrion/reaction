class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list, foreign_key: 'list_id', class_name: 'List', required: true

  def board_id
    list.board_id
  end

  def attributes
    super.merge board_id: board_id
  end
end
