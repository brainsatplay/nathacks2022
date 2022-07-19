// --------- Step 0: Import and initialize the datastreams-api library ---------
import * as datastreams from 'https://cdn.jsdelivr.net/npm/datastreams-api/dist/index.esm.js'
const dataDevices = new datastreams.DataDevices()

// --------- Step 1: Define your device information ---------
import customDevice from './src/device.js'

// --------- Step 2: Declare track handlers ---------
import * as handlers from './src/handlers.js'

// --------- Step 3: Load your device(s) ---------
// ...
dataDevices.load(customDevice)

// --------- Step 4: Start data acquisition on button click ---------
const button = document.querySelector('button')
button.onclick = () => {
    dataDevices.getUserDevice({
        label: 'custom', // declare which device you want to connect to (e.g. 'device', 'ganglion', 'muse')
    }).then(device => {
        device.stream.tracks.forEach(handlers.ontrack)
        device.stream.onaddtrack = (e) => handlers.ontrack(e.track)
    })
}
