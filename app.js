(function() {
  var KingdomLandServer, ws, _;

  require("poor-module");

  require("./node_modules/red-yarn/rpc.js");

  require("./node_modules/red-yarn/red-yarn.js");

  require("./server.js");

  _ = require("underscore");

  ws = require("ws");

  setModule("underscore", function() {
    return _;
  });

  setModule("ws", function() {
    return ws;
  });

  KingdomLandServer = getModule("kingdomland-server");

  KingdomLandServer.create();

}).call(this);
