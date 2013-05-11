"use strict"

var starPoly = require("star-polygon")
var concat = require("simplicial-disjoint-union")

function iGraph(n, k, j) {
  if(j === undefined) {
    j = 1
  }
  if(k === undefined) {
    k = 1
  }
  n |= 0
  j |= 0
  k |= 0
  var r = concat(starPoly(n, k), starPoly(n, j))
  var i
  for(i=0; i<n; ++i) {
    r.push([i, i+n])
  }
  return r
}

module.exports = iGraph