var socket = io();

socket.on('chat message', function(msg){
  $(".messages").append(
    $("<li>").append(
      $('<div class="d-sm-flex flex-row align-content-stretch">').append(
        $('<div class="p-2 alert-success">').append(
            $('<span>').text(msg.user)
        ),
        $('<div class="p-2">').append(
          $("<p class='msg'>").text(msg.text)
        )
      )
    )
  )
  $('.chat-box')[0].scrollTop = $(".messages")[0].scrollHeight ;
});

$("#send").click(function sendMsg(event){
  // prevent refresh
  event.preventDefault();

  var msg = $("#msg").val();
  var user = $("#user").val();
  socket.emit('chat message', { text: msg, user });
  $("#msg").val("");
});
