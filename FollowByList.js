var timemilisec = 300000
var ids = [
  '1', //put the id here to follow the person.
  '2',
  '3',
  '4',
  '5'
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
