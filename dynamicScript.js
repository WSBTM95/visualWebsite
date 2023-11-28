const spec7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Crime Change Over the Years",
    "data": { "url": "viz7.json" },
    "params": [
        { "name": "Show_Types_of_Domestic_Cases", "bind": { "input": "checkbox" } },
    ],
    "mark": "point",
    "encoding": {
        "x": { "field": "Year", "type": "ordinal" },
        "y": { "field": "count", "type": "quantitative" },
        "color": {
            "condition": {
                "param": "Show_Types_of_Domestic_Cases",
                "field": "Domestic",
                "type": "nominal"
            },
            "value": "gray"
        },
        "tooltip": [
            { "field": "count", "type": "quantative" },
        ],
        "size": {
            "value": 100
        }
    }
};
vegaEmbed("#vis7", spec7)

const spec8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "height":500,
    "title": "Top Five Crimes of Each Ward",
    "data": { "url": "viz8.json" },
    "params": [
        {
            "name": "pts",
            "select": { "type": "point", "fields": ["Primary Type"], "toggle": false }
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
                "param": "pts",
                "field": "Primary Type",
                "type": "nominal"
            },
            "value": "circle"
        },
        "size": {
            "condition": { "param": "pts", "value": 300 },
            "value": 0
        },
        "tooltip": [
            { "field": "count", "type": "quantitative" }
        ]
    }
};
vegaEmbed("#vis8", spec8)

const spec9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "HeatMap of Number of Reported Crimes Per Month in Chosen Year",
    "data": { "url": "viz9.json" },
    "mark": "rect",
    "params": [
        {
            "name": "Filter_By_Year",
            "value": 2001,
            "bind": { "input": "range", "min": 2001, "max": 2023, "step": 1 }
        },
    ],
    "transform": [
        { "filter": "datum.Year == Filter_By_Year" }
    ],
    "encoding": {
        "y": { "field": "month", "type": "ordinal", "sort": null },
        "x": { "field": "Primary Type", "type": "ordinal" },
        "color": { "aggregate": "sum", "field": "count" },
        "tooltip": [
            { "field": "month", "type": "nominal" },
            { "field": "Primary Type", "type": "ordinal" },
            { "field": "count", "type": "quantitative" }
        ]
    }
}
vegaEmbed("#vis9", spec9)

const spec10 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "HeatMap of Number of Reported Crimes Per Month in Chosen Year",
    "data": { "url": "viz10.json" },
    "mark": "point",
    "params": [
        {
            "name": "Filter_By_Type",
            "value": "ASSAULT",
            "bind": { "input": "select", "options": ["ASSAULT", "CRIMINAL DAMAGE", "DECEPTIVE PRACTICE", "CRIMINAL SEXUAL ASSAULT", "THEFT", "OFFENSE INVOLVING CHILDREN", "ROBBERY", "SEX OFFENSE", "OTHER OFFENSE", "WEAPONS VIOLATION", "BATTERY", "STALKING", "MOTOR VEHICLE THEFT", "CRIMINAL TRESPASS", "HOMICIDE", "PROSTITUTION", "BURGLARY", "NARCOTICS", "KIDNAPPING", "ARSON", "CONCEALED CARRY LICENSE VIOLATION", "INTERFERENCE WITH PUBLIC OFFICER", "PUBLIC PEACE VIOLATION", "LIQUOR LAW VIOLATION", "INTIMIDATION", "GAMBLING", "OBSCENITY", "HUMAN TRAFFICKING", "OTHER NARCOTIC VIOLATION", "PUBLIC INDECENCY", "RITUALISM", "NON-CRIMINAL"] }
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
        "strokeWidth": {"value": 8}
    },
};
vegaEmbed("#vis10", spec10)