# this is line an index.html but for the server

require "poor-module"
require "./node_modules/red-yarn/rpc.js"
require "./node_modules/red-yarn/red-yarn.js"
require "./server.js"

_ = require "underscore"
ws = require "ws"

setModule "underscore", -> _
setModule "ws", -> ws

KingdomLandServer = getModule "kingdomland-server"
KingdomLandServer.create()




