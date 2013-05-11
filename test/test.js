"use strict"

var I = require("../igraph.js")

require("tap").test("i-graph", function(t) {


  var P = I(5, 2)
  
  t.equals(P.join(":"), "0,2:2,4:4,1:1,3:3,0:5,6:6,7:7,8:8,9:9,5:0,5:1,6:2,7:3,8:4,9")

  t.end()
})