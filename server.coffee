setModule "kingdomland-server", ->
  RedYarn = getModule "red-yarn"
  create: () -> 
    server = RedYarn.createServer "drewl.us:9003", (err, client) ->
      client.call "getClientTime", (err, time) ->
        console.log "a client conntected and his time is #{time}"

    server.getServerTime = (cb) ->
      cb null, Date.now()

    server
