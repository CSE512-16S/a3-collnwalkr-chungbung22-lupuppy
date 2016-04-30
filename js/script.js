format = d3.format(',');

var width = 720,
    height = 720,
    outerRadius = Math.min(width, height) / 2 - 70,
    innerRadius = outerRadius - 24;


var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var layout = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending)
    .sortChords(d3.ascending);

var path = d3.svg.chord()
    .radius(innerRadius);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("id", "circle")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("circle")
    .attr("r", outerRadius);

queue()
    .defer(d3.csv, "cities.csv")
    .defer(d3.json, "matrix.json")
    .await(ready);

function ready(error, cities, matrix) {
  if (error) throw error;

  // Compute the chord layout.
  layout.matrix(matrix);

  // Add a group per neighborhood.
  var group = svg.selectAll(".group")
      .data(layout.groups)
    .enter().append("g")
      .attr("class", "group")
      .on("mouseover", mouseover);

  // Add a mouseover title.
  group.append("title").text(function(d, i) {
    return cities[i].name + ":" + "\n"  + format(d.value) + " people leaving" + "\n" + cities[i].population+" residents";
  });

  // Add the group arc.
  var groupPath = group.append("path")
      .attr("id", function(d, i) { return "group" + i; })
      .attr("d", arc)
      .style("fill", function(d, i) { return cities[i].color; });

  // Add a text label.
  group.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .style("fill","#fff")
  .attr("transform", function(d) {
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
        + "translate(" + (innerRadius + 26) + ")"
        + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .text(function(d, i) { return cities[i].name; });

  // Add the chords.
  var chord = svg.selectAll(".chord")
      .data(layout.chords)
    .enter().append("path")
      .attr("class", "chord")
      .style("fill", function(d) { return cities[d.source.index].color; })
      .attr("d", path);

  // Add an elaborate mouseover title for each chord.
  chord.append("title").text(function(d) {
    return cities[d.source.index].name
        + " → " + cities[d.target.index].name
        + ": " + format(d.source.value) + " people"
        + "\n" + cities[d.target.index].name
        + " → " + cities[d.source.index].name
        + ": " + format(d.target.value) + "people";
  });

  function mouseover(d, i) {
    chord.classed("fade", function(p) {
      return p.source.index != i
          && p.target.index != i;
    });
  }
}
