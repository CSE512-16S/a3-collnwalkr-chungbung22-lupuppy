# a3-collnwalkr-chungbung22-lupuppy

===============

## Team Members

1. Collin Walker (collnwalkr)
2. Christopher Chung (chungbung22)
3. Xinglu Yao (lupuppy)

## Project Name - Population Outflow from State to State 2014-2015

We spent a lot of time trying to decide on which dataset to visualize. Originally we were planning to do a financial fraud dataset, but had trouble coming up with a meaningful visualization. We ultimately chose state to state migration flows as our source dataset. The dataset was small enough that we could effectively and efficiently clean the dataset to suit our needs, but not so large that it would obscure relevant information. 

For each state, we chose to show how many people moved out of that state after a year. We decided to use chord graph for three reasons: first, chord graph visualize interactions among states within a complicated network(there are fifty states we need to visualize); second, chord graph is an effective way to visualize the size of the population; finally, chord graph can express a large amount of information within a condensed visualization (less data ink).  

Using the existing Chord map example on D3 for reference, we sketched out key aspects of our visualization on paper. Then we began implementing the code. We chose to encode the relative frequency of moves between states using the thickness of links between states, where thicker links represent more people moving. Due to the large number of nodes in the diagram (50 states), we chose to merge the outgoing and incoming paths into one path, since otherwise, there would be twice as many paths. As a result the thickness from outgoing and incoming paths are mapped onto the same path, but are encoded with a change in path width, where the path connects to the state. Paths and states were then color coded by region, which can also be viewed by hovering over the legend. Finally, toolips were added to show the movement of people between two states along a path, as well as the total number of people leaving a state  and its current residents along each state label.

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-collnwalkr-chungbung22-lupuppy/ or download this repository and run `python -m SimpleHTTPServer 9000` and access this from http://localhost:9000/.

## Story Board

We Started off sketching key concepts on paper:

[data viz.pdf](https://github.com/CSE512-16S/a3-collnwalkr-chungbung22-lupuppy/files/245907/data.viz.pdf)

1. Using the thickness of the line to visualize size of the population outflow. 
2. Larger population has thicker lines.
3. Tooltips show detailed numeric information. When mouse over the name of the State, tooltip shows number of residents in current state and how many people moving out of the state. When mouse over a certain path, the tooltip shows the detailed population outflow information(i.e. Texas to Alaska, 1000; Alask to Texas, 200).
4. When the mouse is out of the visualization, all the population outflow information is visible.
5. When hover outside of the circle, it would highlight the region(i.e. west) as well as the corresponding states. In that way, we could visualize the flow of a certain region. 
6. When hover certain state, it shows population outflow of that state.
7. The region is color-coded. There are five regions in total.

Then we went off and prototyped on D3.js:

https://github.com/CSE512-16S/a3-collnwalkr-chungbung22-lupuppy/files/245912/story_board_2.pdf

### Changes between Storyboard and the Final Implementation

The majority of the implementation stays consistent with the storyboard. The main difference is the legend. We initially decided to make the region part of the visualization, which would be another layer added on top of the circular visualization. This would provide users with the ability to first hover over the outer region to view each region, then hover towards the inner region, to view the data on the state level. However, we had difficulty deciding on the optimal color and size for the outer region, as it increased the cognitive load of an already busy data visualization. As a result, we decided to use a legend instead. 

We made the legend interactive: when users hover over each region, data that is related to the legend will light up.


## Development Process

SET UP: 
After deciding the data source and the visualization format, Collin cleaned up the migration population excel sheet(1 hour). Xinglu downloaded and organized the assets from the Uber example(1 hour). We studied the example and produced a JSON file that records all the population outflow from one state to another(1 hour).

ADDING DATA:
Chris added the state and the migration population to the visualization. 
We tested the graph with original data. However, the data in the graph did not match the actual data. It turned out that one line of the data was overlooked(1 hour).

VISUALIZE:
At this stage, Chris worked on adding text for each State (1.5 hour). He moved the state name to the outside of the circle for better view. He also updated the tooltips to display change in population and current number of residents in the selected state. Collin and Xinglu worked on the color. For best information presentation, we limited the color to five. Each of the five colors represents a region of the U.S (i.e. Pacific). (1 hour)
The hardest part is prepare the JSON file for the visualization. Chris and Collin spent lots of time rearrange the States on the excel file so that States from the same region could stay together. Then Collin transformed it into JSON file. (2 hours)
Finally, Chris added the legend. (1 hour) Xinglu and Collin spent sometime to decide how to group the regions. Collin used the selection method to make the legend interactive -- users could click the legend to view population outflow within one region. (1.5 hour)

## Limitations:
1. Each chord represents the population outflow of two states. However, we only used one color. This might cause confusion to some viewers.
2. To make the region legend interactive, we attached a region class(i.e. west) to each chord. However, some chords are associated with two regions. Hence, our visualization loses some data if the user hover over the region legend.

## Sources

1. http://www.census.gov/hhes/migration/data/acs/state-to-state.html
2. https://bost.ocks.org/mike/uberdata/
3. http://circos.ca/guide/tables/

