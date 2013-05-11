# i-graph
The [I graph construction](http://mathworld.wolfram.com/IGraph.html) gives a family of graphs which generalize the [generalized](http://en.wikipedia.org/wiki/Generalized_Petersen_graph) [Petersen graph](http://en.wikipedia.org/wiki/Petersen_graph).  These graphs make for interesting test cases for various graph algorithms.

## Example

```javascript
var I = require("i-graph")

//First make a Petersen graph:
var petersen = I(5, 2)

//Now make a more complicated graph
var circ = I(9, 6, 3)
```

### `require("i-graph")(n, k, j)`
Constructs a generalized-generalized Petersen graph.

* `n` is the number of vertices
* `k` is the step for the inner star polygon
* `j` (optional) is the step for the outer star polygon.  If not specified, assume 1 and generate a generalized Petersen graph.

**Returns** The edges of a generalized Petersen graph.

# Credits
(c) 2013 Mikola Lysenko. MIT License