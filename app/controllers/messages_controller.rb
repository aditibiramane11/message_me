class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
       broadcast_to_chatroom
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

  def broadcast_to_chatroom
  turbo_stream.append 'chatroom', target: 'messages' do
    render turbo_stream: turbo_stream.replace(@message, partial: 'messages/message', locals: { message: @message })
  end

end