var StartIdFollow = 1561
var timemilisec = 300000
function follow(id){
$.post('https://friends.roblox.com/v1/users/'+ id +'/follow', function(data){
  if (data['success'] == false){
    setTimeout(function(){follow(id)}, timemilisec) //check if has a error//
      console.log('Error! Unable To Follow: '+id) //prints a error//
  } else {
    setTimeout(function(){follow(id + 1)}, timemilisec) //WITH RANDOM NUMBER CHANGES TO ANOTHER
      console.log('Followed: '+id)
  }
})
}
follow(StartIdFollow)