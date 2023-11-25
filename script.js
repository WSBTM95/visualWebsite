const spec1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description:
    "This is the first visualization, and it displays a pie graph with each slice representing the amount of crime via size.",
  data: {
    url: "/viz1.json",
  },
  title: "Crime Per Year",
  mark: "arc",
  encoding: {
    "theta": { "field": "count", "type": "quantitative" },
    "color": { "field": "Year", "type": "ordinal" },
    "tooltip": [
      { "field": "Year", 'type': 'ordinal' },
      { 'field': "count", 'type': 'quantitative' }
    ]
  },
};
vegaEmbed("#vis1", spec1);

const spec2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  'title': "Total Arrests per Crime Type",
  "data": { 'url': 'viz2.json' },
  "height": { "step": 17 },
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "Primary Type",
      "type": "ordinal",
      "sort": "-x",
      'title': "Crime Type"
    },
    "x": {
      "aggregate": "sum",
      "field": "count",
      "title": "Crime per 10,000"
    },
    'tooltip': [
      { "field": "count", "type": "quantitative" },
    ]
  },
};
vegaEmbed("#vis2", spec2);

const spec3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Crimes in Each Ward",
  "data": { 'url': 'viz3.json' },
  "mark": "circle",
  "encoding": {
    "x": { "field": "crimes_in_Thsnd", "type": "quantitative" },
    "y": { "field": "Ward", "type": "quantitative" },
    "tooltip": [
      { "field": "crimes_in_Thsnd", "type": "quantitative" },
      { "field": "Ward", "type": "quantitative" }
    ]
  }
};
vegaEmbed("#vis3", spec3);

const spec4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Crime per month in 2022",
  "description": "A barchart with month and count data.",
  "data": { "url": "viz4.json" },
  "mark": "bar",
  "encoding": {
    "x": { "field": "month", "type": "ordinal" },
    "y": { "field": "count", "type": "quantitative" },
    'tooltip': [
      { 'field': 'count', 'type': 'quantitative' }
    ]
  }
};
vegaEmbed("#vis4", spec4);

const spec5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 200,
  "title": "Heatmap of Number and Types of Crimes Per Month in 2022",
  "description": "A heatmap showing crimes per month in 2022 based on type of crime.",
  "data": { 'url': 'viz5.json' },
  "mark": "rect",
  "encoding": {
    "y": { "field": "month", "type": "nominal" },
    "x": { "field": "Primary Type", "type": "ordinal" },
    "color": { "aggregate": "mean", "field": "count" },
    'tooltip': [
      { 'field': 'month', 'type': 'nominal' },
      { 'field': 'Primary Type', "type": 'ordinal' },
      { 'field': 'count', 'type': "quantitative" }
    ]
  },
  "config": {
    "axis": { "grid": true, "tickBand": "extent" }
  }
};
vegaEmbed("#vis5", spec5);

const spec6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 200,
  "title": "Change of Specific Crimes Over the Years",
  "description": "A line graph showing the change of crimes as time goes.",
  "data": { 'url': 'viz6.json' },
  "mark": "line",
  "encoding": {
    "y": { "field": "count", "type": "quantitative" },
    "x": { "field": "Year", "type": "nominal" },
    "color": { "field": "Primary Type", "type": "nominal" },
    "config": {
      "axis": { "grid": true }
    }
  }
};
vegaEmbed("#vis6", spec6);
