class Api::CardsController < ApplicationController
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
    
  end

  def show

  end

  private

  def card_params
    params.require(:card).permit(:title)
  end
end
