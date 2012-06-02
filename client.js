(function() {

  setModule("kingdomland-client", function() {
    var RedYarn;
    RedYarn = getModule("red-yarn");
    return {
      create: function() {
        var ClientUi, client, clientUi;
        ClientUi = getModule("kingdomland-client-ui");
        clientUi = ClientUi.create();
        client = RedYarn.createClient("drewl.us:9003", function(err, server) {
          return server.call("getServerTime", function(err, time) {
            return console.log("server time is " + time);
          });
        });
        client.getClientTime = function(cb) {
          cb(null, Date.now());
          return console.log("the server got my time!");
        };
        return client;
      }
    };
  });

}).call(this);
