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
}
    ;
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
    }
};
vegaEmbed("#vis10", spec10)