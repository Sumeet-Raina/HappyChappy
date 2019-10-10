# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Conversation.create(title: "okay", id: 1)
Conversation.create(title: "happy", id: 2)
Conversation.create(title: "silly", id: 3)
Conversation.create(title: "sad", id: 4)

winnie = User.create! :user_name => 'Winnie', :email => 'winnie@hundredacre.woods', :password => 'Password', :password_confirmation => 'Password'
winnie_id = User.last.id
20.times { Mood.create(user_id: winnie_id, mood_type: 'okay') }
10.times { Mood.create(user_id: winnie_id, mood_type: 'happy') }
5.times { Mood.create(user_id: winnie_id, mood_type: 'sad') }
5.times { Mood.create(user_id: winnie_id, mood_type: 'silly') }

piglet = User.create! :user_name => 'Piglet', :email => 'piglet@hundredacre.woods', :password => 'Password', :password_confirmation => 'Password'
piglet_id = User.last.id
10.times { Mood.create(user_id: piglet_id, mood_type: 'okay') }
10.times { Mood.create(user_id: piglet_id, mood_type: 'happy') }
10.times { Mood.create(user_id: piglet_id, mood_type: 'sad') }
10.times { Mood.create(user_id: piglet_id, mood_type: 'silly') }

tigger = User.create! :user_name => 'Tigger', :email => 'tigger@hundredacre.woods', :password => 'Password', :password_confirmation => 'Password'
tigger_id = User.last.id
4.times { Mood.create(user_id: tigger_id, mood_type: 'okay') }
5.times { Mood.create(user_id: tigger_id, mood_type: 'happy') }
1.times { Mood.create(user_id: tigger_id, mood_type: 'sad') }
30.times { Mood.create(user_id: tigger_id, mood_type: 'silly') }

Eeyore = User.create! :user_name => 'Eeyore', :email => 'eeyore@hundredacre.woods', :password => 'Password', :password_confirmation => 'Password'
eeyore_id = User.last.id
1.times { Mood.create(user_id: eeyore_id, mood_type: 'okay') }
1.times { Mood.create(user_id: eeyore_id, mood_type: 'happy') }
1.times { Mood.create(user_id: eeyore_id, mood_type: 'sad') }
36.times { Mood.create(user_id: eeyore_id, mood_type: 'silly') }