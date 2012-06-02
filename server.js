(function() {

  setModule("kingdomland-server", function() {
    var RedYarn;
    RedYarn = getModule("red-yarn");
    return {
      create: function() {
        var server;
        server = RedYarn.createServer("drewl.us:9003", function(err, client) {
          return client.call("getClientTime", function(err, time) {
            return console.log("a client conntected and his time is " + time);
          });
        });
        server.getServerTime = function(cb) {
          return cb(null, Date.now());
        };
        return server;
      }
    };
  });

}).call(this);
