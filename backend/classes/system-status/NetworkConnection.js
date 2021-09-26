class Network {
    protocol;
    localAddress;
    localPort;
    peerAddress;
    peerPort;
    status;
    pid;

    local;
    peer;

    setFromTo() {
        this.local = `${this.localAddress}:${this.localPort}`;
        this.peer  = `${this.peerAddress}:${this.peerPort}`;
    }

    constructor(protocol, localAddress, localPort, peerAddress, peerPort, status, pid) {
        this.protocol     = protocol;
        this.localAddress = localAddress;
        this.localPort    = localPort;
        this.peerAddress  = peerAddress;
        this.peerPort     = peerPort;
        this.status       = status;
        this.pid          = pid;
        this.setFromTo();
    }
}

module.exports = Network;