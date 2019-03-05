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
list = List.create title: 'first list', board: board
card = Card.create title: 'first card', list: list, description: 'blah', labels: ['blue', 'green'], due_date: 2.days.from_now
card2 = Card.create title: 'second card', list: list, description: 'blah', labels: ['red'], due_date: 2.days.from_now
