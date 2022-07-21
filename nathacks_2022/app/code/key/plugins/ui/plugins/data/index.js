
const dataPlugin = {
    operator: (id, data, time) => {

        if (!dataPlugin.paragraphs[id]) {
            dataPlugin.paragraphs[id] = document.createElement('p')
            dataPlugin.element.appendChild(dataPlugin.paragraphs[id])
        }
        dataPlugin.paragraphs[id].innerHTML = `<b>${id}:</b> ${data}`
    },

    tagName: 'div',
    style: {
        width: '300px',
        height: '100px',
        padding: '25px'
    },

    oncreate: (el, props) => {
        dataPlugin.element = el
        dataPlugin.self = props.node
        dataPlugin.paragraphs = {}
    }
}

export default dataPlugin