function lineFunctionFunction(factor) {
	return d3.svg.line()
		.x(function(d) { return factor * d.x; })
		.y(function(d) { return factor * d.y; })
		.interpolate("linear");
}

var trianglePoints = [{"x":-1, "y":-0.866025404}, {"x":0, "y":0.866025404},
					  {"x":1, "y":-0.866025404}, {"x":-1, "y":-0.866025404}];

factor = 100;

function nested(num, total) {
	if (num > 0)
		var myNest = nested(num - 1, total);
	var lineFunction = lineFunctionFunction(factor);
	function my(selection) {
		selection.each(function(data) {
			var s = d3.select(this);

			// make the stroke fatter to keep weight consistent as triangle is scaled smaller
			var path = s.append("path")
			  .style("stroke", "maroon")
			  .attr("d", lineFunction(trianglePoints));



			path.transition()
			 .delay(300)
			 .duration(5000)
			 .style("stroke-width", 1 / Math.pow(0.87, total - num));


			if (num > 0) {

				var newTriangle = s.append("g")
				  .call(myNest);

				newTriangle.transition()
				  .delay(300)
				  .duration(5000)
				  .attr("transform", "scale(.87)rotate(5)translate(-2.7,-4.2)");
			}

		});
	}

	return my;
}

function hexwhirl(width, selector, triangles) {
	var svg = d3.select(selector).append("svg")
      .attr("width", width)
      .attr("height", width)
      .append("g")
      .attr("transform", "scale(" + (width / 400) + "," + (width / 400) + ")");

    var nest = nested(triangles, triangles);

	var hex = ["translate(100,100)scale(1,-1)", "translate(200,100)", "translate(300,100)scale(1,-1)", "translate(200,273)scale(1,-1)", "translate(100,273)", "translate(300,273)"];

	var triangles = svg.selectAll("g.triangle")
	  .data(hex)
	  .enter().append("g");

	triangles
	  .attr("transform", function(d){ return d; })
	  .call(nest);

}
