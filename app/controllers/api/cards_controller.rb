class Api::CardsController < ApplicationController
  def show
    if Card.exists?(params[:id])
      @card = Card.find(params[:id])

      render :show
    else
      @error = 'Something went wrong'
      render 'api/shared/error', status: :unprocessable_entity
    end

  end

  def create
    @list = List.find(params[:list_id])
    @card = Card.new(card_params.merge({ list: @list }))

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = 'Something went wrong'
    render 'api/shared/error', status: :not_found
  end

  def update
  # if key == X action,
  # title
  # list_id
  # position
  # description
  # archived
  # due_date
  # completed
  # labels
  end

  private

  def change_title
    Action.new(params[:description])
  end

  def card_params
    params.require(:card).permit(:title)
  end
end
