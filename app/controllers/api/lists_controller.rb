class Api::ListsController < ApplicationController
  def create
    @board = Board.find(params[:board_id])
    @list = List.new(list_params.merge({ board_id: @board.id }))
  
    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'Something went wrong'
    render 'api/shared/error', status: :not_found
  end

  def update
    @list = List.find(params[:id])
    @list.title = params[:title]
    # @list.position = params[:position]

    @list.save

    render :update, status: :ok
  rescue
    @error = 'Something went wrong'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
