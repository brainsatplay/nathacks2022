const button = {
    operator: (pressed) => pressed, // Click to activate next node

    // Element Specification
    tagName: 'button',
    innerHTML: 'Click Me',
    oncreate: (self, props) => { 
        const pressed = props.node.nodes.get('pressed')
        self.onmousedown = () => {
            pressed.run(true)
            const onMouseUp = () => {
                pressed.run(false)
                globalThis.removeEventListener('mouseup', onMouseUp)
            }
            globalThis.addEventListener('mouseup', onMouseUp)
        }
    }
}

export default button