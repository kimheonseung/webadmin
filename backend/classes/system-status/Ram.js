class Ram {
    totalBytes;
    usedBytes;
    availableBytes;
    usedPercent;

    total;
    used;
    available;

    calculateUsedPercent() {
        this.usedPercent = (this.usedBytes / this.totalBytes) * 100;
    }

    pow(power) {
        this.total     = this.totalBytes / Math.pow(1024, power);
        this.used      = this.usedBytes / Math.pow(1024, power);
        this.available = this.availableBytes / Math.pow(1024, power);
    }

    toFixed(fix) {
        this.total       = parseFloat(this.total.toFixed(fix));
        this.used        = parseFloat(this.used.toFixed(fix));
        this.available   = parseFloat(this.available.toFixed(fix));
        this.usedPercent = parseFloat(this.usedPercent.toFixed(fix));
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

    constructor(total, used, available) {
        this.totalBytes     = total;
        this.usedBytes      = used;
        this.availableBytes = available;
        this.calculateUsedPercent();
    }
}

module.exports = Ram;