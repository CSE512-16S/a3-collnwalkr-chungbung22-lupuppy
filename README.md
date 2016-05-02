# a3-collnwalkr-chungbung22-lupuppy

===============

## Team Members

1. Collin Walker (collnwalkr)
2. Christopher Chung (chungbung22)
3. Xinglu Yao (lupuppy)

## Project Name - Population Migration from State to State 2014-2015

(Put your a brief description of your final interactive visualization application and your dataset here.)

We chose the state to state migration flows as our source data. The data is fairly simple: For each state, it shows how many people moved out of that state after a year. We decided to use chord graph for three reasons: first, chord graph visualize interactions among states within a complicated network(there are fifty states we need to visualize); second, chord graph is an effective way to visualize the size of the population; finally, chord graph can express a large amount of information within a condensed visualization (less data ink).  

Then, using existing Chord map example, we sketched out key aspects of our visualization on paper.

## Running Instructions
Access our visualization at http://cse512-16s.github.io/a3-collnwalkr-chungbung22-lupuppy/ or download this repository and run `python -m SimpleHTTPServer 9000` and access this from http://localhost:9000/.

## Story Board

Put either your storyboard content or a [link to your storyboard pdf file](storyboard.pdf?raw=true) here. Just like A2, you can use any software to create a *reasonable* pdf storyboard.

1. Using the thickness of the line to visualize size of the population outflow. 
2. Larger population has thicker lines.
3. Tooltips show detailed numeric information. When mouse over the name of the State, tooltip shows number of residents in current state and how many people moving out of the state. When mouse over a certain path, the tooltip shows the detailed population outflow information(i.e. Texas to Alaska, 1000; Alask to Texas, 200).
4. When the mouse is out of the visualization, all the population outflow information is visible.
5. When hover outside of the circle, it would highlight the region(i.e. west) as well as the corresponding states. In that way, we could visualize the flow of a certain region. 
6. When hover certain state, it shows population outflow of that state.
7. The region is color-coded. There are five regions in total.


### Changes between Storyboard and the Final Implementation

The majority of the implementation stays consistent with the storyboard. The main difference is the legend We initially decided to make the region part of the visualization(instead of creating legend). However, after a few fails, we decided to use the legend instead. 


## Development Process

SET UP: 
After deciding the data source and the visualization format, Collin cleaned up the migration population excel sheet(1 hour). Xinglu downloaded and organized the assets from the Uber example(1 hour). We studied the example and produced a JSON file that records all the population outflow from one state to another(1 hour).

ADDING DATA:
We added the state and the migration population to the visualization. The initial graph looks like this:
We tested the graph with original data. However, the data in the graph did not match the actual data. It turned out that one line of the data was overlooked(1 hour).

VISUALIZE:
At this stage, Chris worked on adding text for each State (1 hour). He moved the state name to the outside of the circle for better view. He also updated the tooltips to display change in population and current number of residents in the selected state. Collin and Xinglu worked on the color. For best information presentation, we limited the color to five. Each of the five colors represents a region of the U.S (i.e. Pacific). 
The hardest part is prepare the JSON file for the visualization. Chris and Collin spent lots of time rearrange the States on the excel file so that States from the same region could stay together. (2 hour) Then Collin transformed it into JSON file(2 hours). 
Finally, Chris added the legend. (1 hour) Xinglu and Collin spent sometime to decide how to group the regions. Collin used the selection method to make the legend interactive -- users could click the legend to view population outflow within one region. (1 hour)

## Sources

1. http://www.census.gov/hhes/migration/data/acs/state-to-state.html
2. https://bost.ocks.org/mike/uberdata/
3. http://circos.ca/guide/tables/

