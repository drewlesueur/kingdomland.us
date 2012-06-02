(function() {

  setModule("kingdomland-client-ui", function() {
    return {
      create: function() {
        var canvas, canvasEl, clientUi, ctx, fillBackground, height, width;
        clientUi = {};
        width = 320;
        height = 320;
        canvas = $("<canvas width='" + width + "' height='" + height + "'></canvas>");
        $(document.body).append(canvas);
        document.body.ontouchstart = function(e) {
          return e.preventDefault();
        };
        $(document.body).on("click tap", function(e) {
          return e.preventDefault();
        });
        canvasEl = canvas[0];
        ctx = canvasEl.getContext('2d');
        fillBackground = function() {
          ctx.fillStyle = "green";
          return ctx.fillRect(0, 0, width, height);
        };
        ctx.fillRect(0, 0, 16, 16);
        fillBackground();
        return clientUi;
      }
    };
  });

}).call(this);
