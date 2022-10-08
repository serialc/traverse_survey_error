'use strict'

var TSE = {
    "projects": {},
    "active": null
};

TSE.save = function()
{
    localStorage.setItem('projects', JSON.stringify(TSE.projects));
};

TSE.load = function()
{
    if (localStorage.getItem('projects')) {
        TSE.projects = JSON.parse(localStorage.getItem('projects'));
    }
};

TSE.test = function(test_num)
{
    switch (test_num) {
        case 1:
            // create project called test if it doesn't exist
            // delete it otherwise

            // create new project 
            TSE.active = 'test';
            TSE.projects[TSE.active] = {};
            
            // generate pace trials and azim error
            document.getElementById('distance_error_no').click();
            document.getElementById('pacing_distance').value = 60.7;
            document.getElementById('pacing_trial_value').value = 70.5;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 80;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 75;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 73;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 77.5;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 74;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 76;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 72;
            document.getElementById('submit_pace_trial').click();
            document.getElementById('pacing_trial_value').value = 78;
            document.getElementById('submit_pace_trial').click();

            // submit
            document.getElementById('finish_pace_trials').click();
            
            // add direction error
            document.getElementById('azim_error_input').value = 2.5;
            document.getElementById('submit_azim_error').click();

            // go back to project selection
            TSE.resetTabsToStart();
            document.getElementById('section_project_tab').click();

            // save
            TSE.save();
            TSE.updateProjectButtons();
            break;

        case 2:
            TSE.test(1);
            TSE.projects.test.connections = [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 0, 6 ], [ 1, 7 ], [ 2, 8 ], [ 2, 9 ], [ 3, 10 ], [ 4, 11 ] ];
            TSE.projects.test.id_counter = TSE.projects.test.connections.length + 1;
            TSE.projects.test.walls = [ { "op": 8, "dp": 9 }, { "op": 9, "dp": 10 }, { "op": 10, "dp": 11 }, { "op": 11, "dp": 6 }, { "op": 6, "dp": 7 }, { "op": 7, "dp": 8 } ];
            TSE.projects.test.survey = [
    {
      "type": "benchmark",
      "name": "Starting benchmark",
      "id": 0,
      "distance": 0,
      "x": 0,
      "y": 0,
      "n": 0,
      "e": 0,
      "dependence": -1
    },
    {
      "type": "point",
      "name": "oak tree",
      "id": 1,
      "distance": 53.33698224852071,
      "paces": 66,
      "x": 52.68031548939374,
      "y": 8.34374228490763,
      "dependence": 0,
      "azimuth": 81
    },
    {
      "type": "point",
      "name": "lamp post",
      "id": 2,
      "distance": 35.55798816568048,
      "paces": 44,
      "x": 50.199915621520525,
      "y": 43.81511297855475,
      "dependence": 1,
      "azimuth": 356
    },
    {
      "type": "point",
      "name": "no parking sign",
      "id": 3,
      "distance": 57.37766272189349,
      "paces": 71,
      "x": 13.318264951114138,
      "y": 87.76895266581619,
      "dependence": 2,
      "azimuth": 320
    },
    {
      "type": "point",
      "name": "apple tree",
      "id": 4,
      "distance": 58.18579881656805,
      "paces": 72,
      "x": -31.25464290075662,
      "y": 50.36784212681253,
      "dependence": 3,
      "azimuth": 230
    },
    {
      "type": "benchmark",
      "name": "return to starting BM",
      "id": 5,
      "distance": 50.91257396449704,
      "paces": 63,
      "x": -13.841517056340624,
      "y": 2.525672067157906,
      "n": 0,
      "e": 0,
      "dependence": 4,
      "azimuth": 160
    },
    {
      "type": "point",
      "name": "SW corner building",
      "id": 6,
      "distance": 16.970857988165683,
      "paces": 21,
      "x": -3.238192363399902,
      "y": 16.65905552761337,
      "dependence": 0,
      "azimuth": 349
    },
    {
      "type": "point",
      "name": "SE corner building",
      "id": 7,
      "distance": 16.970857988165683,
      "paces": 21,
      "x": 37.69593727999216,
      "y": 16.311077506429186,
      "dependence": 1,
      "azimuth": 298
    },
    {
      "type": "point",
      "name": "SE top corner building",
      "id": 8,
      "distance": 12.122041420118345,
      "paces": 15,
      "x": 39.701919805970846,
      "y": 37.754092268495576,
      "dependence": 2,
      "azimuth": 240
    },
    {
      "type": "point",
      "name": "East inner corner building",
      "id": 9,
      "distance": 32.32544378698225,
      "paces": 40,
      "x": 18.365567960540098,
      "y": 38.20185857267049,
      "dependence": 2,
      "azimuth": 260
    },
    {
      "type": "point",
      "name": "North side - eastern corner",
      "id": 10,
      "distance": 21.81967455621302,
      "paces": 27,
      "x": 17.107211675086024,
      "y": 66.2807679946544,
      "dependence": 3,
      "azimuth": 170
    },
    {
      "type": "point",
      "name": "North side - western corner",
      "id": 11,
      "distance": 29.092899408284026,
      "paces": 36,
      "x": -6.0594529434373925,
      "y": 64.91429183095455,
      "dependence": 4,
      "azimuth": 60
    }
  ];
            TSE.projects.test.selected = 7;
            TSE.updateSVG();
            break;

        default:
            console.log("Unknown test request number " + test_num);
    };
};

// list the projects
TSE.listProjects = function()
{
    let pnames = [];
    return Object.keys(TSE.projects);
};

TSE.loadProject = function(pn)
{
    // set active project
    TSE.active = pn;

    // update displayed name of project
    document.getElementById('project_name').innerHTML = '[' + pn + ']';

    // need to update error inputs and tables
    if (TSE.projects[TSE.active].pace_trials) {

    }
    if (TSE.projects[TSE.active].pace_trials) {
    }
    // TO DO
};

// Goes through points/stations network to see if there's a closed traverse (or just two benchmarks really)
// Closed traverse can be between two benchmarks or a loop that returns to a benchmark
TSE.getGeoreferencedBM = function()
{
    // get all benchmarks
    let bms = TSE.projects[TSE.active].survey.filter( (s) => s.type === "benchmark" );
    // get all benchmarks that have a defined and valid northing and easting (n/e)
    let vbms = bms.filter( (s) => typeof(s.n) !== 'undefined' && !isNaN(s.n) && typeof(s.e) !== 'undefined' && !isNaN(s.e) );
    return vbms;
};

TSE.resetTabsToStart = function(pn)
{
    let errtab = document.getElementById('section2-tab');
    let acttab = document.getElementById('section3-tab');
    let exptab = document.getElementById('section4-tab');
    errtab.disabled = true;
    acttab.disabled = true;
    exptab.disabled = true;
};

TSE.updateProjectButtons = function()
{
    let pnames = TSE.listProjects();
    let target = document.getElementById('projects_list');
    // delete contents/children
    target.textContent= '';

    for (let i in pnames) {
        let pn = pnames[i];
        let btn = document.createElement('button');
        btn.innerHTML = pn;
        btn.classList.add('btn', 'btn-success', 'me-2');

        btn.addEventListener('click', (function() {
            // reset tab visibilities
            TSE.resetTabsToStart();

            // set active project
            TSE.loadProject(pn);

            // jump to next activity (error or map depending)
            // enable error tab
            let errtab = document.getElementById('section2-tab');
            errtab.disabled = false;
            errtab.click();

            // if they have already provided the pacing error percentage jump to main activity
            let pep = TSE.projects[TSE.active].pacing_error_percentage;
            if (pep && !isNaN(pep)) {
                let acttab = document.getElementById('section3-tab');
                acttab.disabled = false;
                acttab.click();
                // also enable the export function
                document.getElementById('section4-tab').disabled = false;
                TSE.tryInitialization();
            }
        }));

        // add button to target
        target.appendChild(btn);
    }
};

// returns the bounds of an array of points with structure {x: #, y: #}
TSE.getBounds = function(points)
{
    // only works if we have points 
    if (!points || points.length === 0) { return false; };

    // get bounds
    let bounds = {"xmin": null, "ymin": null, "xmax": null, "ymax": null};

    for (let k = 0; k < points.length; k+=1) {
        let p = points[k];
        if (bounds.xmax === null || p.x > bounds.xmax) {
            bounds.xmax = p.x;
        }
        if (bounds.ymax === null || p.y > bounds.ymax) {
            bounds.ymax = p.y;
        }
        if (bounds.xmin === null || p.x < bounds.xmin) {
            bounds.xmin = p.x;
        }
        if (bounds.ymin === null || p.y < bounds.ymin) {
            bounds.ymin = p.y;
        }
    }

    return bounds;
};

// displays the table of pace trials
// also does some necessary calculations
TSE.update_pace_trials_table = function()
{
    let table_div = document.getElementById('pace_data_table');
    let prj = TSE.projects[TSE.active];

    // reduce((a,b)=>a+b) sums all values in array
    let pace_lengths_mean= 0;

    if (prj.pace_trials.length > 0) {
        let trials_pace_lengths = prj.pace_trials.map((t)=>t.d/t.p);
        pace_lengths_mean = trials_pace_lengths.reduce((a,b)=>a+b)/prj.pace_trials.length;
    }

    let variance_sum = 0;
    let tc = "<table class='table table-striped'>" +
        "<thead>" +
        "<tr><th>Trial#</th>" +
        "<th>No. of paces</th>" +
        "<th>Distance</th>" +
        "<th>Pace length</th>" +
        "<th>Variance</th>" +
        "<th>Delete</th><tr>" +
        "</thead>";

    tc += "<tbody>";
    for (let trial_num = 0; trial_num < prj.pace_trials.length; trial_num+=1) {
        let pdist = prj.pace_trials[trial_num].d;
        let paces = prj.pace_trials[trial_num].p;
        let pacelen = pdist/paces;

        tc += "<tr>" +
            "<td>" + (trial_num + 1) + "</td>" +
            "<td>" + paces + "</td>" +
            "<td>" + pdist + "</td>" +
            "<td>" + (Math.round(pacelen * 100) / 100) + "</td>" +
            "<td>" + (Math.round(Math.pow(pacelen - pace_lengths_mean, 2) * 10000) / 10000) + "</td>" +
            "<td><a href='#/' onclick='TSE.delete_pace_trial(" + trial_num + ")'>del</a></td>" +
            "</tr>";
        variance_sum += Math.pow(pacelen - pace_lengths_mean, 2);
    }

    tc += "<tr><td></td><td></td><td></td>" +
        "<td>mean=" + (Math.round(pace_lengths_mean * 1000) / 1000) + "</td><td>&Sigma;=" + (Math.round(variance_sum * 10000)/10000) + "</td>" +
        "<td></td></tr>" +
        "</tbody></table>";

    // calculate the standard deviation and standard error
    let stddev = Math.sqrt(variance_sum/(prj.pace_trials.length - 1));
    let stderr = 2 * stddev * 100 / pace_lengths_mean;

    // only show summary if there are mutliple trials
    if (prj.pace_trials.length > 1) {
        tc += "<p class='m-4'>" +
            "<strong>Standard deviation: " + (Math.round(stddev * 10000) / 10000) + "<br>" +
            "Standard error: " + (Math.round(stderr * 10000) / 10000) + "%<br>" +
            "Mean pace length: " + (Math.round(pace_lengths_mean * 100) / 100) + "</p>";
    }

    // save the stderr and pace length to the project
    TSE.projects[TSE.active].pacing_error_percentage = stderr;
    TSE.projects[TSE.active].pace_length = pace_lengths_mean;

    // update the div and make sure it's visible
    table_div.innerHTML = tc;
    table_div.classList.remove('d-none');
};

// add a wall to the data model
TSE.addWall = function(op, dp)
{
    if (op === dp) {
        TSE.warnToast("Select two different stations to create a wall");
        return false;
    }

    // new wall object
    let nwall = {op, dp};

    // add to project array of walls
    if (TSE.projects[TSE.active].walls) {
        TSE.projects[TSE.active].walls.push(nwall);
    } else {
        TSE.projects[TSE.active].walls = [nwall];
    }

    // redraw the map with the added wall
    TSE.updateSVG();
};

// deletes one trial of the pacing activity
TSE.delete_pace_trial = function(i)
{
    // remove pacing trial
    TSE.projects[TSE.active].pace_trials.splice(i, 1);
    TSE.update_pace_trials_table();
};

TSE.deleteStation = function(stnid)
{
    // delete item from survey
    TSE.projects[TSE.active].survey = TSE.projects[TSE.active].survey.filter( s => s.id !== stnid);

    // delete (filter out) this id from the connections - as a parent/dependence
    TSE.projects[TSE.active].connections = TSE.projects[TSE.active].connections.filter(con => con[1] !== stnid);

    // retrieve child/dependent stations
    let childstns = TSE.projects[TSE.active].connections.filter(con => con[0] === stnid );
    childstns.map(cstn => TSE.deleteStation(cstn[1]));

    // delete any wall that uses this station
    let del_walls = TSE.projects[TSE.active].walls.filter(w => w.op === stnid || w.dp === stnid );
    del_walls.map(w => TSE.deleteWall(w, false));
};

TSE.isCtecEnabled = function()
{
    return document.getElementById('closed_traverse_error_correction').checked;
};

// builds GeoJSON objects from data and returns it
TSE.getGeoJSON = function()
{
    let geojson = JSON.stringify({ "type": "FeatureCollection", "features": [ ] });
    let data = {
        "stns": JSON.parse(geojson),
        "geostns": JSON.parse(geojson),
        "lines": JSON.parse(geojson),
        "geolines": JSON.parse(geojson),
        "walls": JSON.parse(geojson),
        "geowalls": JSON.parse(geojson),
        "uncertainty": JSON.parse(geojson),
    };
    
    let svy = TSE.projects[TSE.active].survey;
    let cnxs = TSE.projects[TSE.active].connections;
    let walls = TSE.projects[TSE.active].walls;
    let error = TSE.projects[TSE.active].error_poly;

    // get bm0 location if defined to move local coordinates to georeferenced location
    let e = isNaN(svy[0].e) ? 0 : svy[0].e;
    let n = isNaN(svy[0].n) ? 0 : svy[0].n;
    for (let i = 0; i < svy.length; i+=1) {
        let stn = svy[i];

        // reformat data into geojson feature
        let feature = {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates": [e + stn.x, n + stn.y]
            },
            "properties": {
               "id": stn.id,
               "dep_id": stn.dependence,
               "name": stn.name,
               "type": stn.type,
               "paces": stn.paces,
               "distance": stn.distance,
               "azimuth": stn.azim,
               "on_ctp": stn.traverse_path
            }
        }
        
        // add to stations - push a deep copy
        data.stns.features.push(JSON.parse(JSON.stringify(feature)));

        // add corrected stations if there are at least two BM
        if (TSE.getGeoreferencedBM().length > 1) {
            // alter the object
            feature.geometry.coordinates = [stn.gx, stn.gy];
            delete(feature.geometry.distance);
            data.geostns.features.push(JSON.parse(JSON.stringify(feature)));
        }
    }

    // lines between stations
    for (let i = 0; i < cnxs.length; i+=1) {
        let ostn = TSE.getStationFromId(cnxs[i][0]);
        let dstn = TSE.getStationFromId(cnxs[i][1]);

        // reformat data into geojson feature
        let feature = {
            "type": "Feature",
            "geometry": {
               "type": "LineString",
               "coordinates": [[e + ostn.x, n + ostn.y], [e + dstn.x, n + dstn.y]]
            },
            "properties": {
               "oid": ostn.id,
               "did": dstn.id,
               "paces": dstn.paces,
               "azimuth": dstn.azim,
               "length": dstn.distance,
               "on_ctp": dstn.traverse_path
            }
        }

        // add to lines - push a deep copy
        data.lines.features.push(JSON.parse(JSON.stringify(feature)));

        // add corrected stations if there are at least two BM
        if (TSE.getGeoreferencedBM().length > 1) {
            // alter the object
            feature.geometry.coordinates = [[e + ostn.gx, n + ostn.gy], [e + dstn.gx, n + dstn.gy]]
            // delete distance as it doesn't apply to the corrected locations
            delete(feature.geometry.distance);
            data.geolines.features.push(JSON.parse(JSON.stringify(feature)));
        }
    }

    // walls between stations
    if (walls) {
        for (let i = 0; i < walls.length; i+=1) {
            let ostn = TSE.getStationFromId(walls[i].op);
            let dstn = TSE.getStationFromId(walls[i].dp);

            // reformat data into geojson feature
            let feature = {
                "type": "Feature",
                "geometry": {
                   "type": "LineString",
                   "coordinates": [[e + ostn.x, n + ostn.y], [e + dstn.x, n + dstn.y]]
                },
                "properties": {
                   "oid": ostn.id,
                   "did": dstn.id,
                }
            }
            
            // add to walls - push a deep copy
            data.walls.features.push(JSON.parse(JSON.stringify(feature)));

            // add corrected stations if there are at least two BM
            if (TSE.getGeoreferencedBM().length > 1) {
                // alter the object
                feature.geometry.coordinates = [[e + ostn.gx, n + ostn.gy], [e + dstn.gx, n + dstn.gy]]
                data.geowalls.features.push(JSON.parse(JSON.stringify(feature)));
            }
        }
    }

    // uncertainty/error polygons
    let stn_error_ids = Object.keys(error);
    for (let i = 0; i < stn_error_ids.length; i+=1) {
        let stnid = stn_error_ids[i];
        let err = error[stnid];

        // reformat data into geojson feature
        let poly = err.map( p => [p.x, p.y] );
        // polygon in geojson needs to have same start/end coordinates
        poly.push(poly[0]);

        let feature = {
            "type": "Feature",
            "geometry": {
               "type": "Polygon",
               "coordinates": [poly], // note the extra nesting is needed
            },
            "properties": {
               "id": stnid
            }
        }
        
        // add to uncertainty
        data.uncertainty.features.push(feature);
    }

    return data;

};

// draws the SVG elements from the data
TSE.updateSVG = function()
{
    let prj = TSE.projects[TSE.active];
    let ctec = TSE.isCtecEnabled();
    let bm0 = TSE.projects[TSE.active].survey[0];

    // get the bounds
    let bounds = TSE.getBounds(prj.survey);
    let padding = 10;

    // check if we have any bounds/points and stop if not
    if (!bounds) { return false; };

    // remove svg if already exists
    d3.select("#surveyfigure").remove();
    
    // create SVG
    let svg = d3.select("#results")
        .append("svg")
        .attr("id", "surveyfigure")
        .attr("width", "100%")
        .attr("viewBox",
            // compensate for y-inversion
            (bounds.xmin - padding) + " " + (-bounds.ymax - padding) + " " +
            (bounds.xmax - bounds.xmin + (2 * padding)) + " " + (bounds.ymax - bounds.ymin + (2 * padding))
        ); // viewBox x, y, w, h

    // add CSS styling
    svg.append('style')
        .text(
            ".leg_line, .leg_line_ctp { stroke-dasharray: 2 1; }" +
            ".leg_line, .leg_line_ctp, .wall_line, .marker_benchmark, .marker_point, .faded, .error_poly { stroke: black; stroke-width: 0.5; }" +
            ".leg_line_ctp { stroke: blue; stroke-width: 0.8; }" +
            ".marker_benchmark, .marker_point, .error_poly { fill: white; }" +
            ".faded { opacity: 0.2; }" + 
            ".wall_line { stroke-width: 1; }" + 
            ".sb_line { stroke: black; stroke-width: 0.5; }" + 
            ".sb_text { font-size: 4px; }" + 
            ".error_poly { opacity: 0.3; }" +
            ".selection { fill: #0B5ED7; }"
        );

    // add groups to contain and order layers of map elements/hierarchy
    // uncorrected layers
    let layer_error = svg.append("g")
        .attr("id", "map_error");
    let layer_scalebar = svg.append("g")
        .attr("id", "map_scalebar");
    let layer_walls = svg.append("g")
        .attr("id", "map_walls");
    let layer_lines = svg.append("g")
        .attr("id", "map_lines");
    let layer_stations = svg.append("g")
        .attr("id", "map_stations");

    // ctec layers
    let layer_ctec_walls = svg.append("g")
        .attr("id", "map_ctec_walls");
    let layer_ctec_lines = svg.append("g")
        .attr("id", "map_ctec_lines");
    let layer_ctec_stations = svg.append("g")
        .attr("id", "map_ctec_stations");


    // customize/define some symbol types
    let triangle = d3.symbol()
        .type(d3.symbolTriangle)
        .size(25);
    let circle = d3.symbol()
        .type(d3.symbolCircle)
        .size(10);

    function stnClick(n) {
        // check if this click is completing some other operation besides selection
        if (TSE.projects[TSE.active].mode) {
            switch(TSE.projects[TSE.active].mode) {
                case "wall":
                    // create the wall in the data
                    TSE.addWall(TSE.projects[TSE.active].selected, n.id);

                    // remove the mode and hide the controls, remove selection
                    TSE.hideControlButtons();
                    TSE.resetControls();
                    TSE.selectStation(undefined);
                    return;
                    //break;
                default:
            }
        }

        // save index of selected node/point/bm
        TSE.selectStation(n.id);

        // show controls
        document.getElementById('controls').classList.remove('d-none');
    }

    // iterate through stations and populate svg
    for (let i = 0; i < prj.survey.length; i+=1) {
        let n = prj.survey[i];
        let marker = circle;

        // select correct marker
        switch(n.type) {
            case "benchmark":
                marker = triangle;
                break;

            default:
                // nothing
        }

        // add the measured marker to the SVG
        layer_stations.append("path")
            .attr("d", marker)
            .attr("id", "station_" + n.id + (ctec ? "_faded" : ""))
            // class is dependent on ctec state
            .attr("class", ctec ? "faded" : "pointer marker_" + n.type)
            // don't provide click interaction if ctec enabled
            .on("click", ctec ? false : (evt) => stnClick(n) )
            // note that y is inverted as SVG postive values go down
            .attr("transform", function(d) { return "translate(" + n.x + "," + (-n.y) + ")"; })
            .append("title") // add child title tag for tooltip
            .html(n.name);

        // add the ctac marker to the SVG
        if (ctec) {
            layer_ctec_stations.append("path")
                .attr("d", marker)
                .attr("id", "station_" + n.id)
                // class is dependent on ctec state
                .attr("class", "pointer marker_" + n.type)
                .on("click", (evt) => stnClick(n) )
                // note that y is inverted as SVG postive values go down
                // correct stations that are in georeferenced coordanates based on BM0
                .attr("transform", function(d) { return "translate(" + (n.gx - bm0.gx) + "," + -(n.gy - bm0.gy) + ")"; })
                .append("title") // add child title tag for tooltip
                .html(n.name);
        }
    }
    
    // a recursively called function to illustrate error
    // is not impacted by ctec
    function calcStationError(stnid, error_points) {

        // get the needed stations for ease of reading
        let stn = TSE.getStationFromId(stnid);

        // get azim and pace error
        let error_pace = stn.distance * TSE.projects[TSE.active].pacing_error_percentage / 100;
        let error_azim = TSE.projects[TSE.active].azim_error;

        // store station's error range
        let erpnts = [];

        // first station is a benchmark has no error for this exercise
        if (stn.id !== 0) {
            // calculate x,y according to distance and azim error limits for all error points from dependent
            for (let i = 0; i < error_points.length; i+=1) {
                // change azim error
                erpnts.push({
                    "x": Math.sin((stn.azimuth + error_azim) / 180 * Math.PI) * (stn.distance + error_pace) + error_points[i].x,
                    "y": Math.cos((stn.azimuth + error_azim) / 180 * Math.PI) * (stn.distance + error_pace) + error_points[i].y
                });
                erpnts.push({
                    "x": Math.sin((stn.azimuth - error_azim) / 180 * Math.PI) * (stn.distance + error_pace) + error_points[i].x,
                    "y": Math.cos((stn.azimuth - error_azim) / 180 * Math.PI) * (stn.distance + error_pace) + error_points[i].y
                });
                // change pace error
                erpnts.push({
                    "x": Math.sin((stn.azimuth + error_azim) / 180 * Math.PI) * (stn.distance - error_pace) + error_points[i].x,
                    "y": Math.cos((stn.azimuth + error_azim) / 180 * Math.PI) * (stn.distance - error_pace) + error_points[i].y
                });
                erpnts.push({
                    "x": Math.sin((stn.azimuth - error_azim) / 180 * Math.PI) * (stn.distance - error_pace) + error_points[i].x,
                    "y": Math.cos((stn.azimuth - error_azim) / 180 * Math.PI) * (stn.distance - error_pace) + error_points[i].y
                });
            }

            // transform points keeping external only using convex
            let convex_pnts = QuickHull(erpnts);

            // save them for export
            TSE.projects[TSE.active].error_poly[stn.id] = convex_pnts;

            // calculate error area for this station - remove interior points with turf.convex(points)

            // add error to map
            layer_error.append("polygon")
                .attr("points", convex_pnts.map(function(p) { return p.x + "," + (-p.y) }).join(" "))
                .attr("class", "error_poly")
                .append("title") // add child title tag for tooltip
                .html(stn.name);
        } else {
            // benchmarks
            // just transfer self coordinates
            erpnts = [{"x": stn.x, "y": stn.y}];
        }

        // get all the stations that are dependent on this one and and make recursive call
        let childcon = TSE.projects[TSE.active].connections.filter( c => c[0] === stnid);
        for (let i = 0; i < childcon.length; i+=1) {
            calcStationError(childcon[i][1], erpnts);
        }
    }
    // delete past error polygon data
    TSE.projects[TSE.active].error_poly = {};
    // now recreate the error polygon areas
    // call for the root, second parameter is the error area
    calcStationError(0, [{"x": 0, "y": 0}]);
    
    // iterate through leg lines and add to svg
    for (let i = 0; i < prj.connections.length; i+=1) {
        let cnx = prj.connections[i];

        // for each connection create a line - get the station x,y for each id in cnx
        let orig = prj.survey.filter( obj => obj.id == cnx[0] )[0]
        let dest = prj.survey.filter( obj => obj.id == cnx[1] )[0]

        // add ctec lines
        if (ctec) {
            // highlight the closed traverse path if CTEC is enabled
            let ctec_line_type = TSE.getStationFromId(cnx[1]).traverse_path ? 'leg_line_ctp' : 'leg_line';

            layer_ctec_lines.append("line")
                .attr("x1", orig.gx - bm0.gx)
                .attr("y1", -(orig.gy - bm0.gy))
                .attr("x2", dest.gx - bm0.gx)
                .attr("y2", -(dest.gy - bm0.gy))
                .attr("class", ctec_line_type);
        }

        // note the inverted y axis
        layer_lines.append("line")
            .attr("x1", orig.x)
            .attr("y1", -orig.y)
            .attr("x2", dest.x)
            .attr("y2", -dest.y)
            .attr("class", 'leg_line' + (ctec ? ' faded' : ''));
    }

    // Add scale bar
    // Calculate scale bar width in metres that takes roughly 1/3 width of map
    let sbwm = parseInt((bounds.xmax - bounds.xmin + 2 * padding)/2, 10);
    let sb_tickheight = (bounds.ymax - bounds.ymin + 2 * padding)/100;
    sb_tickheight = sb_tickheight < 1 ? 1 : sb_tickheight;
    let sbdivs = 4;
    let sbint = parseInt(sbwm/4, 10);
    let sbxpad = 3
    let sbypad = 1

    // construct and add to svg
    // add scale bar vertical tick marks and values/numbers
    for (let i = 0; i < sbdivs; i+=1) {
        layer_scalebar.append("line")
            .attr("x1", bounds.xmax + padding - (i * sbint) - sbxpad)
            .attr("y1", (-bounds.ymin + padding/2) - sbypad)
            .attr("x2", bounds.xmax  + padding - (i * sbint) - sbxpad)
            .attr("y2", (-bounds.ymin + padding/2 + sb_tickheight) - sbypad)
            .attr("class", "sb_line");

        let sval = (sbdivs - 1 - i) * sbint;

        layer_scalebar.append("text")
            .attr("x", bounds.xmax + padding - (i * sbint) - String(sval).length - sbxpad)
            .attr("y", (-bounds.ymin + padding) - sbypad)
            .attr("class", "sb_text")
            .text(sval);
    }

    // scale bar unit text
    layer_scalebar.append("text")
        .attr("x", bounds.xmax + padding - (2 * sbint) - sbxpad)
        .attr("y", (-bounds.ymin + padding) - sbypad - 6)
        .attr("class", "sb_text")
        .text("metres");

    // horizontal line
    layer_scalebar.append("line")
            .attr("x1", bounds.xmax + padding - sbxpad)
            .attr("y1", (-bounds.ymin + padding/2) - sbypad)
            .attr("x2", bounds.xmax  + padding - ((sbdivs - 1) * sbint) - sbxpad)
            .attr("y2", (-bounds.ymin + padding/2) - sbypad)
            .attr("class", "sb_line");


    // add the walls if there are any
    if (prj.walls) {

        let walls = prj.walls;
        // iterate through each wall
        for (let w = 0; w < walls.length; w+=1) {
            let wo = TSE.getStationFromId(walls[w].op);
            let wd = TSE.getStationFromId(walls[w].dp);
            
            // 'draw' the wall
            // note the inverted y axis
            layer_walls.append("line")
                .attr("x1", wo.x)
                .attr("y1", -wo.y)
                .attr("x2", wd.x)
                .attr("y2", -wd.y)
                .attr("class", "wall_line" + (ctec ? " faded" : " pointer"))
                .on("click", function() {
                    if (!ctec) { TSE.promptWallDelete(walls[w]);}
                });

            // draw ctec walls
            if (ctec) {
                layer_walls.append("line")
                    .attr("x1", wo.gx - bm0.gx)
                    .attr("y1", -wo.gy - bm0.gy)
                    .attr("x2", wd.gx - bm0.gx)
                    .attr("y2", -wd.gy - bm0.gy)
                    .attr("class", "wall_line pointer")
                    .on("click", function() {
                        TSE.promptWallDelete(walls[w]);
                    });
            }
        }
    }

    // anytime we update the display, update the localStorage
    TSE.save();

    // check if we have a closed traverse in the data
    if (TSE.getGeoreferencedBM().length > 1) {
        // show the error correction checkbox
        document.getElementById('error_controls').classList.remove('d-none');
    } else {
        // hide the error correction checkbox
        document.getElementById('error_controls').classList.add('d-none');
    }
};

TSE.promptWallDelete = function(wall)
{
    if (TSE.projects[TSE.active].wall_click_time && 
        new Date() - TSE.projects[TSE.active].wall_click_time < 1000 &&
        TSE.projects[TSE.active].wall_clicked === wall) {
        TSE.deleteWall(wall);
    } else {
        TSE.infoToast("Double-click a wall to delete it");
        TSE.projects[TSE.active].wall_click_time = new Date();
        TSE.projects[TSE.active].wall_clicked = wall;
    }
};

TSE.deleteWall = function(wall, update=true)
{
    // get index of wall to delete
    let wall_index = TSE.projects[TSE.active]
        .walls.map(w => w === wall) // find match
        .findIndex(i => i); // get index
    // delete from list
    TSE.projects[TSE.active].walls.splice(wall_index, 1);

    // update map
    if (update) {
        TSE.updateSVG();
    }
};

TSE.mergeBM = function(bm1id, bm2id)
{
    let bm1 = TSE.getStationFromId(bm1id);
    let bm2 = TSE.getStationFromId(bm2id);

    // calculate the closing error
    let nsd = bm1.y - bm2.y;
    let ewd = bm1.x - bm2.x;

    // get the nodes in sequence that form the closed traverse
    // Use Dijkstra's algorithm to find the shortest path to bm


    console.log(bm1, bm2);
    console.log(nsd, ewd);
};

TSE.hideControlButtons = function()
{
    document.getElementById('controls').classList.add('d-none');
};

// hides all station controls and forms
TSE.resetControls = function()
{
    // hide the control buttons
    document.getElementById('form_add_leg').classList.add('d-none');
    document.getElementById('form_edit_bm').classList.add('d-none');
    document.getElementById('form_edit').classList.add('d-none');
    document.getElementById('form_wall_instructions').classList.add('d-none');
    document.getElementById('edit_form_submit_btn').classList.add('d-none');
    document.getElementById('form_wall_instructions').classList.add('d-none');
    document.getElementById('forms_and_instructions').classList.add('d-none');
    delete(TSE.projects[TSE.active].mode);
};

// autoincrements the id counter and returns available id
TSE.requestAnId = function()
{
    let id = TSE.projects[TSE.active].id_counter;
    TSE.projects[TSE.active].id_counter += 1;
    return id;
};

// if pace and azim errors are provided, generate map and initial data structure
TSE.tryInitialization = function()
{
    let prj = TSE.projects[TSE.active];

    // check if pace and azim error are provided
    if (!prj.pacing_error_percentage || !prj.azim_error) {
        return false;
    }

    // create starting benchmark if not present
    if (!prj.survey || prj.survey.filter( ob => ob.type == "benchmark" ).length == 0) {
        prj.id_counter = 0;
        prj.connections = [];
        prj.survey = [{
            "type": "benchmark",
            "name": "Starting benchmark",
            "id": TSE.requestAnId(),
            "x": 0,
            "distance": 0,
            "y": 0,
            "dependence": -1 // external
        }];
    }

    // reset views
    TSE.resetControls();
    document.getElementById('closed_traverse_error_correction').checked = false;
    TSE.hideControlButtons();

    // write back any changes to global 
    TSE.projects[TSE.active] = prj;

    TSE.updateSVG();

    return true;
};

// returns the station object given a station id
TSE.getStationFromId = function(stnid)
{
    return TSE.projects[TSE.active].survey.filter( obj => obj.id == stnid)[0];
};

// returns the index of a station in the survey array
TSE.getStationIndexFromId = function(id)
{
    // Note that findIndex "returns the index of the first element in an array that satisfies the provided testing function" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
    return TSE.projects[TSE.active].survey.findIndex( (o) => o.id == id)
};

// set station value
TSE.setStationAtIndex = function(stn, index)
{
    TSE.projects[TSE.active].survey[index] = stn;
};


// makes a station selected in gui and data
TSE.selectStation = function(stnid)
{
    // deselect previous (if any)
    // checking with isNaN otherwise id of 0 will be false
    if (!isNaN(TSE.projects[TSE.active].selected)) {
        let selected = document.getElementById('station_' + TSE.projects[TSE.active].selected);
        // if selected exists (we may have deleted it) - then deselect it
        if (selected) {
            selected.classList.remove("selection");
        }
    }

    // select new
    if (!isNaN(stnid)) {
        document.getElementById('station_' + stnid).classList.add("selection")
    }

    TSE.projects[TSE.active].selected = stnid;
    TSE.resetControls();
};

// returns a list of ids of nodes to form shortest path between origin and destination
TSE.shortestPath = function(net, o, d)
{
    function findDestination (stnid) {
        if (stnid === d) {
            return [d];
        }

        // get the children of the station
        let kids = net.filter( c => c[0] === stnid);

        if (kids.length > 0) { 
            for (let i = 0; i < kids.length; i+=1) {
                let kres = findDestination(kids[i][1]);
                // if this child found the destination, return it
                if (kres !== false) {
                    // kres is then an array
                    kres.push(stnid);
                    return kres;
                }
            }
        }
        return false;
    }

    return findDestination(o);
};

TSE.recomputeAllXY = function()
{
    // tree search - start at root and look dependents, etc, recursive until spur/leaf
    function updateXY(stnid) {

        // get the index of the edited station in the array
        let stnindex = TSE.getStationIndexFromId(stnid);
        // get the station for ease of reading
        let stn = TSE.getStationFromId(stnid);

        // skip for BM0
        if (stnindex !== 0) {
            // calculate x,y based on dependent
            // get the object this station is dependent on
            let dependent = TSE.getStationFromId(stn.dependence);
            stn.x = Math.sin(stn.azimuth / 180 * Math.PI) * stn.distance + dependent.x;
            stn.y = Math.cos(stn.azimuth / 180 * Math.PI) * stn.distance + dependent.y;
            
            // replace the station back in the main data array
            TSE.setStationAtIndex(stn, stnindex);
        }

        // get all the stations that are dependent on this one and and make recursive call
        let childcon = TSE.projects[TSE.active].connections.filter( c => c[0] === stnid);
        for (let i = 0; i < childcon.length; i+=1) {
            updateXY(childcon[i][1]);
        }
    }

    // start from root/benchmark
    updateXY(0);

    // if we have any closed traverses then also calculate the georeferenced XY, gx, gy
    let geobm = TSE.getGeoreferencedBM();
    if (geobm.length > 1) {
        // there can be multiple georeferenced benchmarks
        // select only the **first two** benchmarks and calculate the closing error
        // the first survey point is always a benchmark, and used

        // calculate the difference between where the traverse located the bm and where it should be
        let error = {
            "x":geobm[0].e + geobm[1].x - geobm[1].e,
            "y": geobm[0].n + geobm[1].y - geobm[1].n
        };

        // calculate the path from BM0 to BM1 - get a sequential list of ids
        let ctpath = TSE.shortestPath(TSE.projects[TSE.active].connections, geobm[0].id, geobm[1].id);

        // update the 'traverse_path' value for each station to false
        for (let j = 0; j < TSE.projects[TSE.active].survey.length; j+=1) {
            TSE.projects[TSE.active].survey[j].traverse_path = false;
        }

        // get the total distance, in metres, of all the legs in the closed traverse set
        let perimeter_traverse = 0;
        for (let i = 0; i < ctpath.length; i+=1) {
            let stn = TSE.getStationFromId(ctpath[i]);
            // handle for bm0 that has no distance value
            perimeter_traverse += typeof(stn.distance) === 'undefined' ? 0 : stn.distance;
        }

        // now go through closed traverse set and define the georeference values, gx, gy
        // calculating the gx, gy values 
        // start from BM0
        let gx = 0;
        let gy = 0;
        let stn, stnindex;
        for (let i = (ctpath.length - 1); i >= 0; i-=1) {
            stnindex = TSE.getStationIndexFromId(ctpath[i]);
            stn = TSE.getStationFromId(ctpath[i]);

            // updated georeferenced coordinates
            // use georeferenced coordinates of benchmark when available (for the first/last)
            let rx, ry;
            if (stn.id === 0) {
                // don't do for BM0
                rx = 0;
                ry = 0;
            } else {
                rx = Math.sin(stn.azimuth / 180 * Math.PI) * stn.distance;
                ry = Math.cos(stn.azimuth / 180 * Math.PI) * stn.distance;
            }

            // combine the change between stations with the closed traverse error proportion
            gx = stn.e ? stn.e : gx + rx - error.x * stn.distance/perimeter_traverse;
            gy = stn.n ? stn.n : gy + ry - error.y * stn.distance/perimeter_traverse;

            // update local station object
            stn.gx = gx;
            stn.gy = gy;
            stn.traverse_path = true;

            // update global object
            TSE.setStationAtIndex(stn, stnindex);
        }

        // tree searches dependents recursively until spur/leaf
        // repeats the updateXY but a bit differently
        function updateCorrectedXY(stnid) {

            // retrieve info on stn
            let uc_stnindex = TSE.getStationIndexFromId(stnid);
            let uc_stn = TSE.getStationFromId(stnid);

            // skip for BM0
            if (stnid !== 0 && !uc_stn.traverse_path) {
                // calculate x,y based on dependent
                // get the object this station is dependent on
                let dependent = TSE.getStationFromId(uc_stn.dependence);
                uc_stn.gx = Math.sin(uc_stn.azimuth / 180 * Math.PI) * uc_stn.distance + dependent.gx;
                uc_stn.gy = Math.cos(uc_stn.azimuth / 180 * Math.PI) * uc_stn.distance + dependent.gy;

                // replace the station back in the main data array
                TSE.setStationAtIndex(uc_stn, uc_stnindex);
            }

            // get all the stations that are dependent on this one and and make recursive call
            let childcon = TSE.projects[TSE.active].connections.filter( c => c[0] === stnid);
            for (let i = 0; i < childcon.length; i+=1) {
                updateCorrectedXY(childcon[i][1]);
            }
        }

        // start from root/benchmark
        updateCorrectedXY(0);

    }
};

// display notifications
TSE.successToast = function(msg, head_text = "Success")
{
    TSE.toast(msg, head_text, "bg-success", "text-light");
};

TSE.infoToast = function(msg, head_text = "Information")
{
    TSE.toast(msg, head_text, "bg-primary", "text-light");
};

TSE.warnToast = function(msg, head_text = "Warning")
{
    TSE.toast(msg, head_text, "bg-warning", "text-dark");
};

TSE.toast = function(msg, head_text, type, text_colour)
{
    // update  msg
    document.getElementById('toast-body').innerHTML = msg;

    // set the toast type
    let th = document.getElementById('toast-head');
    th.classList.remove("bg-warning");
    th.classList.remove("bg-primary");
    th.classList.remove("bg-success");
    th.classList.add(type);

    let tht = document.getElementById('toast-head-text');
    tht.classList.remove("text-dark");
    tht.classList.remove("text-light");
    tht.classList.add(text_colour);
    tht.innerHTML = head_text;

    // get the overall toast
    let toast = document.getElementById('liveToast');
    const t = new bootstrap.Toast(toast);
    t.show();
};

// initialization
(function(){

    // retrieve projects from browser data
    TSE.load();

    // update list of projects
    TSE.updateProjectButtons();

    document.getElementById('distance_error_yes').onclick = function() {
        let yesb = document.getElementById('distance_error_yes');
        let nob = document.getElementById('distance_error_no');
        let yesf = document.getElementById('known_pace_and_error_input');
        let nof = document.getElementById('calc_dist_error_input');

        // update buttons to show un/activite button
        yesb.classList.remove('btn-outline-primary')
        yesb.classList.add('btn-primary')
        nob.classList.remove('btn-primary')
        nob.classList.add('btn-outline-primary');

        yesf.classList.remove('d-none');
        nof.classList.add('d-none');
    };
    document.getElementById('distance_error_no').onclick = function() {
        let yesb = document.getElementById('distance_error_yes');
        let yesf = document.getElementById('known_pace_and_error_input');
        let nob = document.getElementById('distance_error_no');
        let nof = document.getElementById('calc_dist_error_input');

        nob.classList.remove('btn-outline-primary')
        nob.classList.add('btn-primary')
        yesb.classList.remove('btn-primary')
        yesb.classList.add('btn-outline-primary');

        yesf.classList.add('d-none');
        nof.classList.remove('d-none');
    };
    document.getElementById('finish_pace_trials').onclick = function() {
        // hide the dist error form
        document.getElementById('dist_error_select').classList.add('d-none');
        // show the azim error form
        document.getElementById('calc_azim_error_input').classList.remove('d-none');
    };
    document.getElementById('submit_distance_error').onclick = function() {
        // some initialization
        if (!TSE.projects[TSE.active]) { TSE.projects[TSE.active] = {}; }

        let pep = parseFloat(document.getElementById('known_error_percentage').value, 10);
        let pl = parseFloat(document.getElementById('known_pace_length').value, 10);


        // check the values
        if (pep.length === 0 || isNaN(pep) || pl.length === 0 || isNaN(pl)) {
            TSE.warnToast("Pace length and error percentage must have valid values");
            return false;
        }

        TSE.projects[TSE.active].pacing_error_percentage = pep;
        TSE.projects[TSE.active].pace_length = pl;

        // hide the dist error form
        document.getElementById('dist_error_select').classList.add('d-none');
        // show the azim error form
        document.getElementById('calc_azim_error_input').classList.remove('d-none');
        
        // try to setup the graph area if the required paramters have been provided
        TSE.tryInitialization();
    };
    document.getElementById('return_to_dist_error').onclick = function() {
        // hide the azim error form
        document.getElementById('dist_error_select').classList.remove('d-none');
        // show the dist error form
        document.getElementById('calc_azim_error_input').classList.add('d-none');
    };
    document.getElementById('submit_pace_trial').onclick = function() {
        // some initialization
        if (!TSE.projects[TSE.active]) { TSE.projects[TSE.active] = {}; }

        let pdinput = document.getElementById('pacing_distance');
        let pinput = document.getElementById('pacing_trial_value');
        let pdist = parseFloat(pdinput.value, 10);
        let paces = parseFloat(pinput.value);
        
        // validation
        if (isNaN(pdist) || isNaN(paces)) { return; }

        // save values

        // clear paces input value but not pace distance
        pinput.value = "";

        if (!TSE.projects[TSE.active].pace_trials) {
            TSE.projects[TSE.active].pace_trials = [];
        }

        TSE.projects[TSE.active].pace_trials.push({"d": pdist, "p": paces});
        TSE.update_pace_trials_table();

        // if we have at least 6 trials, enable the progress button
        if (TSE.projects[TSE.active].pace_trials.length >= 6) {
            document.getElementById('finish_pace_trials').disabled = false;
        }
    };
    document.getElementById('submit_azim_error').onclick = function() {
        // some initialization
        if (!TSE.projects[TSE.active]) { TSE.projects[TSE.active] = {}; }

        let azim = parseFloat(document.getElementById('azim_error_input').value);
        if(azim.length === 0 || isNaN(azim)) {
            TSE.warnToast("Azimuth error must have a valid value");
            return false;
        }

        TSE.projects[TSE.active].azim_error = azim;

        // try to setup the graph area if the required paramters have been provided
        if (TSE.tryInitialization()) {
            // it's initializing, so go to traverse
            document.getElementById("begin_survey_traverse").scrollIntoView({behavior: 'smooth'});
        }

        // go to the activity tab
        let acttab = document.getElementById('section3-tab');
        acttab.disabled = false;
        acttab.click();
        // also enable the export function
        document.getElementById('section4-tab').disabled = false;
    };
    document.getElementById('control_add_leg').onclick = function() {
        TSE.resetControls();
        document.getElementById('form_add_leg').classList.remove('d-none');
        document.getElementById('forms_and_instructions').classList.remove('d-none');
    };
    document.getElementById('control_edit').onclick = function() {
        let stn = TSE.getStationFromId(TSE.projects[TSE.active].selected);

        TSE.resetControls();

        // if editing the starting benchmark or any benchmark, display northing/easting options as well
        if (stn.type === "benchmark") {
            document.getElementById('form_edit_bm').classList.remove('d-none');
            document.getElementById('edit_bm_northing').value = stn.n;
            document.getElementById('edit_bm_easting').value = stn.e;
        }
        if (stn.id !== 0) {
            document.getElementById('form_edit').classList.remove('d-none');
        }
        document.getElementById('edit_form_submit_btn').classList.remove('d-none');
        document.getElementById('forms_and_instructions').classList.remove('d-none');

        // populate the edit form with the select station's data
        document.getElementById('edit_station_azim').value = stn.azimuth;
        document.getElementById('edit_station_paces').value = stn.paces;
        document.getElementById('edit_station_description').value = stn.name;
        if (stn.type === "point" ) {
            document.getElementById('edit_station_type_point').checked = true;
        } else {
            document.getElementById('edit_station_type_benchmark').checked = true;
        }
    };
    document.getElementById('submit_station_edit').onclick = function() {
        // retrieve data from form
        let azim = parseFloat(document.getElementById('edit_station_azim').value);
        let paces = parseFloat(document.getElementById('edit_station_paces').value);
        let desc = document.getElementById('edit_station_description').value;
        // below only works as long as we don't add a third point type
        let ptype = document.getElementById('edit_station_type_point').checked ? "point" : "benchmark";

        // get station id/index/object
        let stnid = TSE.projects[TSE.active].selected;
        // get the index of the edited station in the array
        let stnindex = TSE.projects[TSE.active].survey.findIndex( (o) => o.id == stnid)
        // get the object we want to update
        let stn = TSE.projects[TSE.active].survey[stnindex];

        // update name and station type
        stn.name = desc;
        stn.type = ptype;

        // update the N/E for benchmarks
        if (stn.type === "benchmark") {
            stn.n = parseFloat(document.getElementById('edit_bm_northing').value);
            stn.e = parseFloat(document.getElementById('edit_bm_easting').value);
        }

        // update the x/y coordinates and other attributes (except for the starting benchmark)
        if (stn.id !== 0) {
            stn.azimuth = azim;
            stn.paces = paces;

            // calculate
            let dist = TSE.projects[TSE.active].pace_length * paces;
            stn.distance = dist;

            // get the object this station is dependent on
            let dependent = TSE.getStationFromId(stn.dependence);
            stn.x = Math.sin(azim / 180 * Math.PI) * dist + dependent.x;
            stn.y = Math.cos(azim / 180 * Math.PI) * dist + dependent.y;
        }

        // replace the object we want to update
        TSE.projects[TSE.active].survey[stnindex] = stn;

        // recompute all X,Y as we've made changes
        TSE.recomputeAllXY();

        // update SVG display
        TSE.updateSVG();
        TSE.hideControlButtons();
        TSE.resetControls();
    };
    document.getElementById('control_wall').onclick = function() {
        TSE.resetControls();
        document.getElementById('form_wall_instructions').classList.remove('d-none');
        document.getElementById('forms_and_instructions').classList.remove('d-none');
        TSE.projects[TSE.active].mode = "wall";
    };
    document.getElementById('control_delete').onclick = function() {

        let target = TSE.projects[TSE.active].selected;
        if (target === 0) {
            TSE.warnToast("Starting benchmark cannot be deleted");
            return;
        }

        // delete stations and dependencies
        TSE.deleteStation(TSE.projects[TSE.active].selected);
        
        // update display
        TSE.updateSVG();
        TSE.resetControls();
    };
    document.getElementById('control_close').onclick = function() {
        TSE.hideControlButtons();
        TSE.resetControls();
        TSE.selectStation(undefined);
    };
    document.getElementById('submit_new_leg').onclick = function() {

        // get inputs
        let elazim = document.getElementById('target_azim');
        let elpaces = document.getElementById('target_distance');
        let eldesc = document.getElementById('target_description');
        let elptype = document.getElementById('target_type_point');
        
        // check if inputs are valid
        if (elazim.value == "" || elpaces.value == "") {
            TSE.warnToast("You must specify both an <strong>azimuth</strong> and pace <strong>distance</strong> at a minimum.");
            return false;
        }

        // get values
        let azim = parseFloat(elazim.value);
        let paces = parseFloat(elpaces.value);
        let desc = eldesc.value;
        // below only works as long as we don't add a third point type
        let ptype = elptype.checked ? "point" : "benchmark";

        // reset inputs
        elazim.value = "";
        elpaces.value = "";
        eldesc.value = "";
        elptype.checked = true;
        
        // retrieve the dependend object that was clicked on
        let dependent = TSE.getStationFromId(TSE.projects[TSE.active].selected);
        let stnid = TSE.requestAnId();

        // convert paces to metres (or other unit)
        let dist = TSE.projects[TSE.active].pace_length * paces;

        // calculate x,y
        let x = Math.sin(azim / 180 * Math.PI) * dist + dependent.x;
        let y = Math.cos(azim / 180 * Math.PI) * dist + dependent.y;

        // add point to project survey list
        TSE.projects[TSE.active].survey.push({
            "type": ptype,
            "name": desc,
            "id": stnid,
            "azimuth": azim,
            "distance": dist,
            "paces": paces,
            "x": x,
            "y": y,
            "dependence": dependent.id
        });

        // add lines to list - we note the ids, not the coordinates in case they are changed
        TSE.projects[TSE.active].connections.push([dependent.id, stnid]);

        // gui update controls and SVG graphics
        TSE.hideControlButtons();
        TSE.updateSVG();
        TSE.resetControls();
    };
    document.getElementById('goto_section_after1').onclick = function() {
        document.getElementById('section_project_tab').click();
    };
    document.getElementById('create_new_project').onclick = function() {
        let pnin = document.getElementById('new_project_name');
        let npn = pnin.value;
        pnin.value = '';
        // check if a project with this name already exists
        if (TSE.projects[npn]) {
        } else {
            TSE.active = npn;
            TSE.projects[TSE.active] = {};
        }

        TSE.save();

        // update list of projects
        TSE.updateProjectButtons();
    };
    document.getElementById('closed_traverse_error_correction').onclick = function(e) {
        if (TSE.isCtecEnabled()) {
            TSE.recomputeAllXY();
        }
        TSE.updateSVG();
    }
    document.getElementById('gen_data_zip').onclick = function(e) {

        // retrieve multiple GeoJSON objects
        let data = TSE.getGeoJSON();
        console.log(data);

        // check if data is valid - if so zip and save/download
        if (data !== false) {
            // zip data for download - using JSZip and FileSaver
            // https://stuk.github.io/jszip/documentation/examples.html
            let zip = new JSZip();
            zip.file('measures/' + TSE.active + "_stations.geojson", JSON.stringify(data.stns));
            zip.file('corrected/' + TSE.active + "_stations.geojson", JSON.stringify(data.geostns));
            zip.file('measures/' + TSE.active + "_lines.geojson", JSON.stringify(data.lines));
            zip.file('corrected/' + TSE.active + "_lines.geojson", JSON.stringify(data.geolines));
            zip.file('measures/' + TSE.active + "_walls.geojson", JSON.stringify(data.walls));
            zip.file('corrected/' + TSE.active + "_walls.geojson", JSON.stringify(data.geowalls));
            zip.file('measures/' + TSE.active + "_uncertainty.geojson", JSON.stringify(data.uncertainty));
            zip.file(TSE.active + "_map.svg", document.getElementById('surveyfigure').outerHTML);
            
            zip.generateAsync({type:"blob"})
            .then(function(content) {
                saveAs(content, TSE.active + "_data_export.zip");
            });
        }
    }
}());
