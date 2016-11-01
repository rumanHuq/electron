//Steps 
/* 
  1. intantiate app module which handles the application states
  2. Load BrowserWindow which is the UI of the app
  3. instantiate BrowserWindow and give height and width
  4. Give file location to render on electron engine
 */

/**
 * Electron runs with multiple processes of two types
 * there are two types:
 * 1. Main
 *    - There is always one main process in app
 *    - acts as controller of the app
 *    - manages application life cycle
 *    - headless(no UI)
 *    - incharge of spawning new render process(es)
 * 2.render
 *    - each render process is represented by app in UI window
 *    - Normally this is what users see and interact
 *    - can create other processes for concurrent work
 *    - each process type has its own api
 * 
 * IPC: communication and coordination between processes
 *      is done via a mechanism called IPC(Inter process communication)
 *        - Both main and render process type gets its own IPC module
 *        - IPC module is instance of NodeJS's EventEmitter
 
 * Example of IPC-Flow
 *  ->render process capture user event,like 'click a button'
 *    ->render process brodcast an event, can be named anything. for example: 'startnow'. { ipc.send('startnow') }
 *      -> main process listen for start event { ipc.on('startnow', fn) }
 *        -> when it hears it, it sends another event to all the 
 *           child processes(render module AKA renderer) called 'process event' { renderer.webContents.send('processing') }
 *            NOTE: mainWindow is also a type of renderer
 *        -> upon hearing process event, child process updates the UI based on the event { ipc.on('processing', fn) }
 */