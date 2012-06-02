setModule "kingdomland-client", () ->
  RedYarn = getModule "red-yarn"
  create: ->
    ClientUi = getModule("kingdomland-client-ui")
    clientUi = ClientUi.create()
    client = RedYarn.createClient "drewl.us:9003", (err, server) ->
      server.call "getServerTime", (err, time) ->
        console.log "server time is #{time}"

    client.getClientTime = (cb) ->
      cb null, Date.now()
      console.log "the server got my time!"

    client



