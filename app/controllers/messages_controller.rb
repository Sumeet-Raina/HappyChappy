class MessagesController < ApplicationController
  def create
    message = Message.create(text: params[:text], conversation_id: params[:conversation_id], user_name: current_user.user_name)
    conversation = Conversation.find(params[:conversation_id])
    MessagesChannel.broadcast_to conversation, { message: message, key: message.id }
  end
end
