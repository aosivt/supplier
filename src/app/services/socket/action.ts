// Actions you can take on the App
export enum Action {
    JOINED,
    LEFT,
    RENAME,
    SAVE = 'SAVE'
}

// Socket.io events
export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}