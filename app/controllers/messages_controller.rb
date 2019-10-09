class MessagesController < ApplicationController
  def create
    p "____________________________________________"
    p "____________________________________________"
    p "____________________________________________"
    p "____________________________________________"
    p params[:text]
    p "____________________________________________"
    p "____________________________________________"
    p "____________________________________________"
    p "____________________________________________"
    message = Message.create(text: params[:text], conversation_id: params[:conversation_id])
    conversation = Conversation.find(params[:conversation_id])
    MessagesChannel.broadcast_to conversation, message
  end
end
