const spec7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Crime Change Over the Years",
    "data": { "url": "/viz7.json" },
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
    "data": {"url": "/viz8.json"},
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