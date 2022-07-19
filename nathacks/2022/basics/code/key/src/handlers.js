const dataDiv = document.getElementById('data')
const time = document.getElementById('time')
let startTime = null
let tracks = {}

export const ondata = (track, data, timestamp) => {

    // track time elapsed
    if (!startTime) startTime = timestamp[0]

    // insert a new paragraph tag into the id='data' element for each track
    const label = track.contentHint
    if (!tracks[label]) {
        tracks[label] = document.createElement('p')
        dataDiv.appendChild(tracks[label])
    }

    // update the id='time' readout
    time.innerText = `${((timestamp[0] - startTime)/1000).toFixed(2)}s`

    // update the text content of this track's paragraph
    tracks[label].innerHTML = `<h3>${track.contentHint}</h3>${JSON.stringify(data)}`    
}

export const ontrack = (track) =>  track.subscribe((data, timestamp) => ondata(track, data, timestamp))