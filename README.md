# Socket Chat

Similar to creating a todo app, writing a basic chat feature seems simple enough to implement but is easily underestimated. Although  seemingly straight-forward, chat-based applications involve polling for changes, keeping track of timestamps and users, and can wreak with slow response times. Even with its technical baggage, chat features are popular because they allow real-time interactions and add a personal touch to the experience of your app.

This afternoon, we'll utilize Socket.io to address some of the problems traditional chat applications encounter, ergo use Sockets to provide a bi-directional communication channel between a client and a server.

## The Project

Using the base template provided, we will scaffold out a basic chat application that responds to events and provides feedback to all users who connect to our server.

The app should be able to do the following:

### Level 1

* Fork this public repository on GitHub and pull down the template files
* Create a basic web based application with:
  * Ability to register a user's name into the main general chat room
  * Ability to notify other users when a user has joined
  * Ability to show a message when a user has left the channel

### Level 2

* Ability for a user to send a message to the general chat
* See others messages that have posted to the general chat

### Level 3

* Create an event that displays when a user is typing
* Display in some way, users are typing in the chat box

### Level 4

* Design the chat box to model other chat applications
* Add animations and formatting features, like bold/italics, to each message

### Level 5

* Add multiple channels
* Allow users to link to other channels with a specific keyword
* Allow users to link to other users with a specific keyword
* Push application to Now

## Conclusion

The specification is otherwise open-ended to the implementation of the application. For example, you may choose the form of user interface (e.g. React, Vanilla JS).