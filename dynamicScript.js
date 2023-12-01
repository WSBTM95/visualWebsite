const spec7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "vconcat": [
        {
            "title": "Crime Change Over the Years",
            "width": 800,
            "data": { "url": "viz7.json" },
            "params": [
                {
                    "name": "barFilter",
                    "select": { "type": "point", "fields": ["Year", "Domestic"] }
                }
            ],
            "mark": "point",
            "encoding": {
                "x": { "field": "Year", "type": "ordinal" },
                "y": { "field": "count", "type": "quantitative" },
                "color": {
                    "field": "Domestic",
                    "scale": { "range": ["#ba0909", "#239943"] }
                },
                "tooltip": [
                    { "field": "count", "type": "quantitative" },
                ],
                "size": {
                    "value": 100
                }
            }
        },

        {
            "data": { "url": "viz7_2.json" },
            "height": 300,
            "width": 750,
            "title": {
                "text": { "signal": "'Type of Crime Breakdown For the Year of ' + barFilter.Year + ' For ' + barFilter.Domestic + ' Cases'" }
            },
            "layer": [
                {
                    "mark": "bar"
                },
                {
                    "mark": {
                        "type": "text",
                        "align": "left",
                        "baseline": "middle",
                        "dx": 10,
                        "dy": 2,
                        // "stroke":"black"
                    },
                    "encoding": {
                        "text": { "field": "count", "type": "quantitative" },
                        "size": { "value": 0, "condition": { "param": "barFilter", "value": 10, "empty": false } }
                    }
                }
            ],
            "transform": [{ "filter": { "param": "barFilter" } }],
            "encoding": {
                "y": { "type": "nominal", "field": "Primary Type", "sort": "-x" },
                "x": { "type": "quantitative", "field": "count" },
            }
        }
    ]
};
vegaEmbed("#vis7", spec7);

const spec8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "viz8.json"
    },

    "vconcat": [
        {
            "title": "Top Five Crimes of Each Ward",
            "params": [
                {
                    "name": "grid",
                    "select": "interval",
                    "bind": "scales"
                },
                {
                    "name": "typePicker",
                    "select": { "type": "point", "fields": ["Primary Type"] }

                }
            ],
            "width": 1000,
            "mark": "point",
            "transform": [{ "filter": { "param": "pntBrush" } }],
            "encoding": {
                "x": {
                    "field": "Ward",
                    "type": "ordinal",
                    "scale": { "domain": { "param": "pntBrush" } },
                    "axis": { "title": "" }
                },
                "y": {
                    "field": "count",
                    "type": "quantitative"
                },
                "color": {
                    "field": "Primary Type",
                    "type": "nominal"
                },
                "shape": {
                    "field": "Primary Type"
                },
                "size": {
                    "condition": { "param": "pts", "value": 300 },
                    "value": 0
                },
                "tooltip": [
                    { "field": "count", "type": "quantitative" },
                    {
                        "field": "Primary Type",
                        "type": "nominal"
                    }
                ]
            }
        },

        {
            "params": [
                {
                    "name": "pts",
                    "select": { "type": "point", "fields": ["Primary Type"] }
                },
                {
                    "name": "pntBrush",
                    "select": { "type": "interval", "encodings": ["x"] }
                }
            ],
            "mark": "point",
            "encoding": {
                "x": { "field": "Ward", "type": "ordinal" },
                "y": { "field": "count", "type": "quantitative" },
                "color": {
                    "field": "Primary Type",
                    "type": "nominal"
                },
                "shape": {
                    "condition": {
                        "param": "typePicker",
                        "field": "Primary Type",
                        "type": "nominal"
                    },
                    "value": "circle"
                },
                "size": {
                    "condition": { "param": "typePicker", "value": 300 },
                    "value": 0
                }
            }
        }
    ]
};
vegaEmbed("#vis8", spec8);

const spec9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": { "url": "viz9.json" },
    "params": [
        {
            "name": "Filter_By_Year",
            "value": 2001,
            "bind": { "input": "range", "min": 2001, "max": 2023, "step": 1 }
        }
    ],
    "vconcat": [

        {
            "title": {
                "text": { "signal": "'The Changing Trend of ' + squarePicker['Primary Type'] + ' in the Month of '+ squarePicker.month + ' Across All Years'" }
            },
            "width": 800,
            "transform": [
                { "filter": { "param": "squarePicker" } }
            ],
            "mark": { "type": "area", "line": true, "point": true },
            "encoding": {
                "x": {
                    "field": "Year",
                    "type": "ordinal",
                    "axis": { "grid": true },
                    "scale": {
                        "domainMin": 2001,
                        "domainMax": 2023
                    }
                },
                "y": { "field": "count", "type": "quantitative" },
                "size": {
                    "value": 0,
                    "condition": { "param": "squarePicker", "empty": false }
                },
                "tooltip": [
                    { "field": "count", "type": "quatitative" }
                ]
            }
        },

        {
            "width": 800,
            "title": "Heatmap of the Number of Reported Crimes Per Month in Chosen Year",
            "mark": "rect",
            "params": [
                {
                    "name": "squarePicker",
                    "select": { "type": "point", "fields": ["month", "Primary Type"] }
                }
            ],
            "transform": [
                { "filter": "datum.Year == Filter_By_Year" }
            ],
            "encoding": {
                "y": { "field": "numMonth", "type": "ordinal", "axis": { "grid": true, "tickBand": "extent" } },
                "x": { "field": "Primary Type", "type": "ordinal", "axis": { "grid": true, "tickBand": "extent" } },
                "color": {
                    "aggregate": "sum",
                    "field": "count",
                    "legend": {
                        "orient": "none",
                        "legendX": 900,
                        "legendY": 300
                    }
                },
                "tooltip": [
                    { "field": "month", "type": "ordinal" },
                    { "field": "Primary Type", "type": "ordinal" },
                    { "field": "count", "type": "quantitative" }
                ]
            }
        }
    ]
};
vegaEmbed("#vis9", spec9);

const spec10 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Heatmap of the Number of Reported Type of Crime Per Ward in A Range of Years",
    "data": { "url": "viz10.json" },
    "mark": "rect",
    "params": [
        {
            "name": "Filter_By_Type",
            "value": "ASSAULT",
            "bind": { "input": "select", "options": ["ARSON", "ASSAULT", "BATTERY", "BURGLARY", "CONCEALED CARRY LICENSE VIOLATION", "CRIMINAL DAMAGE", "CRIMINAL SEXUAL ASSAULT", "CRIMINAL TRESPASS", "DECEPTIVE PRACTICE", "GAMBLING", "HOMICIDE", "HUMAN TRAFFICKING", "INTERFERENCE WITH PUBLIC OFFICER", "INTIMIDATION", "KIDNAPPING", "LIQUOR LAW VIOLATION", "MOTOR VEHICLE THEFT", "NARCOTICS", "NON-CRIMINAL", "OBSCENITY", "OFFENSE INVOLVING CHILDREN", "OTHER NARCOTIC VIOLATION", "OTHER OFFENSE", "PROSTITUTION", "PUBLIC INDECENCY", "PUBLIC PEACE VIOLATION", "RITUALISM", "ROBBERY", "SEX OFFENSE", "STALKING", "THEFT", "WEAPONS VIOLATION"] }
        },
        {
            "name": "minYear",
            "value": 2001,
            "bind": { "input": "range", "min": 2001, "max": 2023, "step": 1 }
        },
        {
            "name": "maxYear",
            "value": 2023,
            "bind": { "input": "range", "min": 2001, "max": 2023, "step": 1 }
        },
    ],
    "transform": [
        { "filter": "datum['Primary Type'] == Filter_By_Type" },
        { "filter": "minYear <= datum['Year'] & datum['Year'] <= maxYear" }
    ],
    "encoding": {
        "y": { "field": "Year", "type": "ordinal" },
        "x": { "field": "Ward", "type": "ordinal" },
        "color": { "aggregate": "sum", "field": "count", "scale": { "scheme": "yelloworangered" } },
        "tooltip": [
            { "field": "count", "type": "quantitative" }
        ],
        "size": { "value": 100 },
        "strokeWidth": { "value": 8 }
    },
    "config": {
        "axis": { "grid": true, "tickBand": "extent" }
    }
};
vegaEmbed("#vis10", spec10);