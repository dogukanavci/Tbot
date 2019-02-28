console.log("Bot is starting");

var Twit = require ('twit');
var config = require('./config.js');

var T = new Twit(config);

var tweet = function(tweet){
  T.post('statuses/update',
    { status: tweet },

    function(err, data, response) {
      console.log(data)
    })
}

var retweet = function (id){
  T.post('statuses/retweet/:id', { id: id }, function (err, data, response) {
  })
}


var celebrateBirthday = function(){
  T.get('search/tweets', { q: 'my birthday today since:2019-02-28', count: 1 }, function(err, data, response) {
    if(data.statuses[0])
      retweet(data.statuses[0].id_str);
  })
}
setInterval(celebrateBirthday,5000);
