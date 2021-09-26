class Network {
    ip;
    speed;
    mac;
    rxBytes;
    txBytes;

    rx;
    tx;

    pow(power) {
        this.rx = this.rxBytes / Math.pow(1024, power);
        this.tx = this.txBytes / Math.pow(1024, power);
    }

    toFixed(fix) {
        this.rx = parseFloat(this.rx.toFixed(fix));
        this.tx = parseFloat(this.tx.toFixed(fix));
    }

    toGB() {
        this.pow(3);
        this.toFixed(2);
    }

    toMB() {
        this.pow(2);
        this.toFixed(2);
    }

    toKB() {
        this.pow(1);
        this.toFixed(2);
    }

    constructor(ip, speed, mac, rxBytes, txBytes) {
        this.ip      = ip;
        this.speed   = speed;
        this.mac     = mac;
        this.rxBytes = rxBytes;
        this.txBytes = txBytes;
    }
}

module.exports = Network;