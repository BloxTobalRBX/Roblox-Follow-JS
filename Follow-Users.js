var limitid = 9999999 //Put the limit id like will follow users using random numbers with the limit, if you want to follow new accounts, add 9 again.
var timemilisec = 300000 //Minutes to follow people Min: 5 minutes bc roblox ratelimit API 
// if you have ratelimit, you will have to wait 1 hour to run the code again.

function follow(id){
  $.post('https://friends.roblox.com/v1/users/'+ id +'/follow', function(data){
    if (data['success'] == false){
      setTimeout(function(){follow(id)}, timemilisec) //check if has a error//
        console.log('Error! Unable To Follow: '+id) //prints a error//
    } else {
      setTimeout(function(){follow(Math.floor(Math.random() * limitid))}, timemilisec) //WITH RANDOM NUMBER CHANGES TO ANOTHER
        console.log('Followed: '+id)
    }
  })
  }

follow(Math.floor(Math.random() * limitid))
