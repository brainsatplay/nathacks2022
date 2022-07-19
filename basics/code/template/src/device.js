// Note: A complete template device can be found at https://github.com/brainsatplay/device
// or imported from "https://cdn.jsdelivr.net/npm/@brainsatplay/device@0.0.3/dist/index.esm.js"

let looping = false
const customDevice = {
    label: 'custom', // device name
    onconnect: (device) => { 

        // Declare an animation loop
        // ...

        // Generate sine data inside the loop
        // ...

        // Pass new data to the ondata callback for your device
        device.ondata({})
        
    }, 
    ondisconnect: async () => looping = false, // how to stop data acquisition
    ondata: (channels) => channels, // how to transform incoming data
    protocols: [] // possible connection protocols for this device
}

export default customDevice