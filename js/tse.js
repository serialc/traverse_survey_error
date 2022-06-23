
var TSE = {
    "projects": {},
    "defaults": {},
    "active": null
};

TSE.test = function(test_num)
{
    'use strict'
    switch (test_num) {
        case 1:
            // generate pace trials and azim error
            document.getElementById('distance_error_no').click();
            document.getElementById('pacing_distance').value = 60.7;
            document.getElementById('submit_pace_distance').click();
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
            
            // add direction error
            document.getElementById('azim_error_input').value = 2.5;
            document.getElementById('submit_azim_error').click();
            break;

        case 2:
            break;

        default:
            console.log(test_num);
    };
};

TSE.getBounds = function(points) {
    'use strict'

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

TSE.createGrid = function(target, grid_name) {
    'use strict'

    let e = document.getElementById(target);
    let grid_size = TSE.defaults.grid_size;

    d3.select("#" + target + "svg").remove();

    let padding = 20;

    let svg = d3.select("#" + target)
        .append("svg")
        .attr("id", target + "svg")
        .attr("width", "100")
        .attr("height", "100")
        .attr("viewBox", "-" + padding + " -" + padding + " " + (grid_size + (2*padding)) + " " + (grid_size + (2*padding)));

    svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", grid_size)
        .attr("height", grid_size)
        .attr("stroke", "grey")
        .attr("stroke-width", 4)
        .attr("fill", "none");

    svg.append("text")
        .attr("x", 0.1 * grid_size)
        .attr("y", 0.3 * grid_size)
        .attr("font-size", "2em")
        .text( grid_name.toUpperCase() );

    // add points to grid
    let gpoints = [];
    for (let x = 0; x <= grid_size; x+=(grid_size/2)) {
        for (let y = 0; y <= grid_size; y+=(grid_size/2)) {
            gpoints.push({"x": x, "y": y});
        }
    }
    svg.append("g")
        .selectAll("circle")
        .data(gpoints)
        .enter().append("circle")
        .on("click", function() { 
            // reset all to green
            svg.selectAll("circle")
                .attr("fill", "green");

            // but this one to blue
            this.setAttribute("fill", "blue");

            if (target === "l1g") {
                TSE.aloc.one = {
                    "x": parseInt(this.getAttribute("cx"), 10),
                    "y": parseInt(this.getAttribute("cy"), 10)
                };
            }
            if (target === "l2g") {
                TSE.aloc.two = {
                    "x": parseInt(this.getAttribute("cx"), 10),
                    "y": parseInt(this.getAttribute("cy"), 10)
                };
            }

            // enable the advanced submission
            if (TSE.aloc.one !== null && TSE.aloc.two !== null) {
                document.getElementById("advanced").disabled = false;
            }
        })
        .attr("fill", "green")
        .attr("opacity", 0.5)
        .attr("class", "hover")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 20);

};

TSE.update_pace_trials_table = function()
{
    let table_div = document.getElementById('pace_data_table');
    let prj = TSE.projects[TSE.active];
    // reduce((a,b)=>a+b) sums all values in array
    let trials_pace_mean = prj.pace_trials.reduce((a,b)=>a+b)/prj.pace_trials.length;
    let pacelen_mean = prj.pacing_distance/trials_pace_mean;
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
        let paces = prj.pace_trials[trial_num];
        let pacelen = prj.pacing_distance/paces;

        tc += "<tr>" +
            "<td>" + (trial_num + 1) + "</td>" +
            "<td>" + paces + "</td>" +
            "<td>" + prj.pacing_distance + "</td>" +
            "<td>" + (Math.round(pacelen * 100) / 100) + "</td>" +
            "<td>" + (Math.round(Math.pow(pacelen - pacelen_mean, 2) * 10000) / 10000) + "</td>" +
            "<td><a href='#/' onclick='TSE.delete_pace_trial(" + trial_num + ")'>del</a></td>" +
            "</tr>";
        variance_sum += Math.pow(pacelen - pacelen_mean, 2);
    }

    tc += "<tr><td></td><td></td><td></td>" +
        "<td>mean=" + (Math.round(pacelen_mean * 1000) / 1000) + "</td><td>&Sigma;=" + (Math.round(variance_sum * 10000)/10000) + "</td>" +
        "<td></td></tr>" +
        "</tbody></table>";

    // calculate the standard deviation and standard error
    let stddev = Math.sqrt(variance_sum/(prj.pace_trials.length - 1));
    let stderr = 2 * stddev * 100 / pacelen_mean;

    tc += "<p class='m-4'>" +
        "<strong>Standard deviation: " + (Math.round(stddev * 10000) / 10000) + "<br>" +
        "Standard error: " + (Math.round(stderr * 10000) / 10000) + "%<br>" +
        "Mean pace length: " + (Math.round(pacelen_mean * 100) / 100) + "</p>";

    // save the stderr and pace length to the project
    TSE.projects[TSE.active].pacing_error_percentage = stderr;
    TSE.projects[TSE.active].pace_length = pacelen_mean;

    // update the div and make sure it's visible
    table_div.innerHTML = tc;
    table_div.classList.remove('d-none');
};


TSE.delete_pace_trial = function(i)
{
    // remove pacing trial
    TSE.projects[TSE.active].pace_trials.splice(i, 1);
    TSE.update_pace_trials_table();
};

TSE.updateSVG = function()
{
    let prj = TSE.projects[TSE.active];

    // get the bounds
    let bounds = TSE.getBounds(prj.survey);
    let padding = 10;

    // remove svg if already exists
    d3.select("#surveyfigure").remove();
    
    // create SVG
    let svg = d3.select("#results")
        .append("svg")
        .attr("id", "surveyfigure")
        .attr("viewBox",
            // compensate for y-inversion
            (bounds.xmin - padding) + " " + (-bounds.ymax - padding) + " " +
            (bounds.xmax - bounds.xmin + (2 * padding)) + " " + (bounds.ymax - bounds.ymin + (2 * padding))
        ); // viewBox x, y, w, h

    // add groups to contain and order layers of map elements/hierarchy
    let layer_lines = svg.append("g")
        .attr("id", "map_lines")
    let layer_stations = svg.append("g")
        .attr("id", "map_stations")

    // customize/define some symbol types
    let triangle = d3.symbol()
        .type(d3.symbolTriangle)
        .size(25);
    let circle = d3.symbol()
        .type(d3.symbolCircle)
        .size(10);

    // iterate through stations and populate svg
    for (let i = 0; i < prj.survey.length; i+=1) {
        let n = prj.survey[i];
        let marker = circle;

        // select correct marker
        switch(n.type) {
            case "benchmark":
                marker = triangle;
                break;
        }

        // add the marker to the SVG
        layer_stations.append("path")
            .attr("d", marker)
            .attr("id", "station_" + n.id)
            //.attr("stroke", "black")
            //.attr("fill", "white")
            .attr("class", "pointer")
            .on("click", function() {
                // save index of selected node/point/bm
                TSE.select_station(n.id);
                // show controls
                document.getElementById('controls').classList.remove('d-none');
            })
            // note that y is inverted as SVG postive values go down
            .attr("transform", function(d) { return "translate(" + n.x + "," + (-n.y) + ")"; })
            .append("title") // add child title tag for tooltip
            .html(n.name);
    }
    
    // iterate through lines and populate svg
    for (i = 0; i < prj.connections.length; i+=1) {
        let cnx = prj.connections[i];
        // for each connection create a line
        let orig = prj.survey.filter( obj => obj.id == cnx[0] )[0]
        let dest = prj.survey.filter( obj => obj.id == cnx[1] )[0]

        // note the inverted y axis
        layer_lines.append("line")
            .attr("x1", orig.x)
            .attr("y1", -orig.y)
            .attr("x2", dest.x)
            .attr("y2", -dest.y)
            .attr("class", "leg_line");
    }
};

TSE.resetControls = function()
{
    document.getElementById('controls').classList.add('d-none');
    document.getElementById('form_add_leg').classList.add('d-none');
    document.getElementById('form_edit').classList.add('d-none');
    document.getElementById('form_wall_instructions').classList.add('d-none');
};

TSE.requestAnId = function()
{
    let id = TSE.projects[TSE.active].id_counter;
    TSE.projects[TSE.active].id_counter += 1;
    return id;
};

TSE.tryInitialization = function()
{
    let prj = TSE.projects[TSE.active];

    // check if pace and azim error are provided
    if (!prj.pacing_error_percentage || !prj.azim_error) {
        return;
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
            "y": 0,
            "dependence": -1 // external
        }];
    }

    // write back any changes to global 
    TSE.projects[TSE.active] = prj;

    TSE.updateSVG();
};

TSE.select_station = function(stnid) {
    console.log("Requesting selection of " + stnid);
    console.log("Previous selection was of " + TSE.projects[TSE.active].selected);

    // deselect previous
    // testing with isNaN otherwise id of 0 will be false
    if (!isNaN(TSE.projects[TSE.active].selected)) {
        document.getElementById('station_' + TSE.projects[TSE.active].selected).classList.remove("selection")
    }

    // select new
    if (!isNaN(stnid)) {
        document.getElementById('station_' + stnid).classList.add("selection")
    }

    TSE.projects[TSE.active].selected = stnid;
};

// initialization
(function(){
    'use strict'
    document.getElementById('distance_error_yes').onclick = function() {
        let yesb = document.getElementById('distance_error_yes');
        let nob = document.getElementById('distance_error_no');
        let yesf = document.getElementById('known_pace_and_error_input');
        let nof = document.getElementById('calc_error_input');

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
        let nof = document.getElementById('calc_error_input');

        nob.classList.remove('btn-outline-primary')
        nob.classList.add('btn-primary')
        yesb.classList.remove('btn-primary')
        yesb.classList.add('btn-outline-primary');

        yesf.classList.add('d-none');
        nof.classList.remove('d-none');
    };
    document.getElementById('submit_distance_error').onclick = function() {
        if (TSE.active === null) {
            TSE.active = 'main';
        }
        if (!TSE.projects[TSE.active]) {
            TSE.projects[TSE.active] = {};
        }
        TSE.projects[TSE.active].pacing_error_percentage = parseFloat(document.getElementById('known_error_percentage').value, 10);
        TSE.projects[TSE.active].pace_length = parseFloat(document.getElementById('known_pace_length').value, 10);
    };
    document.getElementById('submit_pace_distance').onclick = function() {
        if (TSE.active === null) {
            TSE.active = 'main';
        }
        if (!TSE.projects[TSE.active]) {
            TSE.projects[TSE.active] = {};
        }
        TSE.projects[TSE.active].pacing_distance = parseFloat(document.getElementById('pacing_distance').value, 10);

        // show the input form for pace measurement tests
        document.getElementById('input_pace_test').classList.remove('d-none');

    };
    document.getElementById('submit_pace_trial').onclick = function() {
        let paces = parseFloat(document.getElementById('pacing_trial_value').value);

        if (!TSE.projects[TSE.active].pace_trials) {
            TSE.projects[TSE.active].pace_trials = [];
        }
        TSE.projects[TSE.active].pace_trials.push(paces);
        TSE.update_pace_trials_table();

        // try to setup the graph area if the required paramters have been provided
        TSE.tryInitialization();
    };

    document.getElementById('submit_azim_error').onclick = function() {
        if (TSE.active === null) {
            TSE.active = 'main';
        }
        let azim = parseFloat(document.getElementById('azim_error_input').value);

        if (!TSE.projects[TSE.active]) {
            TSE.projects[TSE.active] = {};
        }
        TSE.projects[TSE.active].azim_error = azim;

        // try to setup the graph area if the required paramters have been provided
        TSE.tryInitialization();
    };
    document.getElementById('control_add_leg').onclick = function() {
        TSE.action = 'add_leg';
        document.getElementById('form_add_leg').classList.remove('d-none');
    };
    document.getElementById('control_edit').onclick = function() {
        TSE.action = 'edit';
        document.getElementById('form_edit').classList.remove('d-none');
    };
    document.getElementById('control_wall').onclick = function() {
        TSE.action = 'wall';
        document.getElementById('form_wall_instructions').classList.remove('d-none');
    };
    document.getElementById('control_delete').onclick = function() {
        let selection = TSE.projects[TSE.active].selected;
        TSE.projects[TSE.active].survey.splice(selection, 1);
        TSE.updateSVG();
    };
    document.getElementById('control_close').onclick = function() {
        TSE.resetControls();
        TSE.select_station(undefined);
        TSE.action = null;
    };
    document.getElementById('submit_new_leg').onclick = function() {
        let azim = parseFloat(document.getElementById('target_azim').value);
        let paces = parseFloat(document.getElementById('target_distance').value);
        let desc = document.getElementById('target_description').value;
        // below only works as long as we don't add a third point type
        let ptype = document.getElementById('target_type_point').checked ? "point" : "benchmark";
        // retrieve the dependend object that was clicked on
        let dependent = TSE.projects[TSE.active].survey.filter( obj => obj.id == TSE.projects[TSE.active].selected )[0];
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
            "x": x,
            "y": y,
            "dependence": dependent.id
        });

        // add lines to list - we note the ids, not the coordinates in case they are changed
        TSE.projects[TSE.active].connections.push([dependent.id, stnid]);

        // gui update controls and SVG graphics
        TSE.resetControls();
        TSE.updateSVG();
    };
    
}());
