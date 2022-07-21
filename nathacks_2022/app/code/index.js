
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'

    // import appInfo from './key/index.js'
    import appInfo from './template/index.js'

    const app = new brainsatplay.App()
    const editor = new editorComponents.Editor()
    editor.setApp(app)

    const ui = document.createElement('div')
    editor.setUI(ui)

    app.setParent(ui)

    // Toggle Between Editable Apps and Bare Apps
    let activeApp = app
    if (activeApp.active) activeApp = activeApp.active
    app.onstart = editor.start

    // Start the App (+ initialization)
    console.log('App Info', app)
    app.start(appInfo).then(ok => {

        console.log('App', app)

        if (ok) editor.setGraph(activeApp.graph)

    }).catch(e => console.error('Invalid App', e))

    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.