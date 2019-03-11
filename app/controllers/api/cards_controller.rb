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
    @card = Card.find(params[:id])

    if @card.update(card_params)
      card_params.keys.each do |field|
        field = field.to_sym
        if Action.field_to_description(field)
          description = Action.field_to_description(field, card_params[field])
          Action.create(description: description), card: @card)
        end
      end
      render :update, status: :updated
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'Something went wrong'
    render 'api/shared/error', status: :not_found
  end

  private

  def change_title
    Action.new(params[:description])
  end

  def card_params
    params.require(:card).permit(:title, :card => [:title, :list_id, :position, :description, :archived, :due_date, :completed, :labels])
  end
end
