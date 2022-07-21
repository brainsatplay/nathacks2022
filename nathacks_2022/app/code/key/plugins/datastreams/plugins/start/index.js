import dataDevices from "../index.js"


let self;

const startPlugin = {
    tag: 'start',
    operator: async (input, ...data) => {

        if (input === 'data') return data
        else {
            // Activate the Specified Device
            return await dataDevices.getUserDevice(input).then(device => {

                // Begin Tracking the Device Data
                const ontrack = (track) => {
                    track.subscribe((data, timestamp) => {
                        startPlugin.self.graph.run(startPlugin.self, 'data', track.contentHint, data, timestamp)
                    })
                }
                
                device.stream.getTracks().forEach(ontrack)
                device.stream.onaddtrack = ontrack
                // return device
            })
        }
    },
    
    tagName: 'div',
    oncreate: (_, props) => {
        startPlugin.self = props.node
    }
}

export default startPlugin