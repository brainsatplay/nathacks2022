import button from "./plugins/button/index.js"
import data from "./plugins/data/index.js"

import pkg from './package.json' assert {type: 'json'};
import graph from './.brainsatplay/index.graph.json' assert {type: 'json'};

const ui = {
    button,
    data,
    ['.brainsatplay']: {
        package: pkg,
        graph,
    }
}

export default ui