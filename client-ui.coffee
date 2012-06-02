setModule "kingdomland-client-ui", ->
  create: ->
    clientUi =  {}
    width = 320
    height = 320

    canvas = $("<canvas width='#{width}' height='#{height}'></canvas>")
    $(document.body).append canvas
    
    document.body.ontouchstart = (e) ->
      e.preventDefault()

    $(document.body).on "click tap", (e) ->
      e.preventDefault()
      
    canvasEl = canvas[0]
    ctx = canvasEl.getContext '2d' 

    fillBackground = ->
      ctx.fillStyle = "green"
      ctx.fillRect 0, 0 , width, height


    ctx.fillRect(0,0,16,16)
    fillBackground()

    

    clientUi


