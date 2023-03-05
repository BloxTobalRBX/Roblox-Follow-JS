var timemilisec = 300000
var ids = [
  '4290165710',
  '4352135418',
  '2563609400',
  '3571815529',
  '3871492061'
  ]

ids.forEach(function (el, index) {
    setTimeout(function () {
        $.post('https://friends.roblox.com/v1/users/'+ el +'/follow', function(data){
            if (data['success'] == false){
                console.log('Error! Unable To Follow: '+el) //prints a error//
            } else {
              console.log('Followed: '+el)
            }
          })
    }, index * timemilisec);
  });