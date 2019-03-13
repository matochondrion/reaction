# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board = Board.create title: 'first board'

list1 = List.create title: 'first list', board: board
list2 = List.create title: 'second list', board: board

list1_card1 = Card.create title: 'first card', list: list1, description: 'blah', labels: ['blue', 'green'], due_date: 2.days.from_now
list1_card2 = Card.create title: 'second card', list: list1, description: 'blah', labels: ['red'], due_date: 2.days.from_now

list2_card1 = Card.create title: 'first card', list: list2, description: 'blah', labels: ['red'], due_date: 2.days.from_now
list2_card2 = Card.create title: 'second card', list: list2, description: 'blah', labels: ['red'], due_date: 2.days.from_now
list2_card3 = Card.create title: 'third card', list: list2, description: 'blah', labels: ['red'], due_date: 2.days.from_now

card1_comment1 = Comment.create text: 'here is a comment', card: list2_card1
card1_comment2 = Comment.create text: 'another comment right here!', card: list2_card1
