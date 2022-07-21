
import start from './plugins/start/index.js'
// import load from './plugins/load/index.js'

import pkg from './package.json' assert {type: 'json'};
import graph from './.brainsatplay/index.graph.json' assert {type: 'json'};

const datastreams = {
    start,
    // load,
    ['.brainsatplay']: {
        package: pkg,
        graph,
    }
}

export default datastreams