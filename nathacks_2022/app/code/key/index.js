import datastreams from "./plugins/datastreams/index.js"
import ui from "./plugins/ui/index.js"

// Devices
import synthetic from "./plugins/devices/synthetic/index.js"
import ganglion from "./plugins/devices/ganglion/index.js"
import muse from "./plugins/devices/muse/index.js"


import pkg from './package.json' assert {type: 'json'};
import graph from './.brainsatplay/index.graph.json' assert {type: 'json'};

export default {
    datastreams, 
    ui,

    synthetic,
    ganglion,
    muse,

    ['.brainsatplay']: {
        package: pkg,
        graph,
    }
}