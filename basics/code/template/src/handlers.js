export const ondata = (track, data, timestamp) => {

    // track time elapsed
    // ...

    // insert a new paragraph tag into the id='data' element for each track
    // ...

    // update the id='time' readout
    // ...

    // update the text content of this track's paragraph
    // ...
}


export const ontrack = (track) => track.subscribe((data, timestamp) => ondata(track, data, timestamp))