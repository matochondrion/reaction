class Api::CommentsController < ApplicationController
  def create
    @card = Card.find { |card| card.id == params[:card_id] }
    @comment = Comment.new(comment_params.merge({ card: @card }))

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid board data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end
