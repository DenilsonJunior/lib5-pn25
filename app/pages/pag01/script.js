events.on("ready",function(){$(".comecar").on("click",function(){$(".modal-help").removeClass("hide");var n=$("#help").find("[tabindex]").filter(function(){return 1<$(this).attr("tabindex")}).first();n.length&&n.focus()}),$(".modal-closed2").on("click focus",function(){navigate.next()})});
//# sourceMappingURL=script.js.map
