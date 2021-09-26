class Process {
    pid;
    parentPid;
    cpuPercent;
    memoryPercent;
    name;
    path;
    command;
    startAt;

    constructor(pid, parentPid, cpuPercent, memoryPercent, name, path, command, startAt) {
        this.pid           = pid;
        this.parentPid     = parentPid;
        this.cpuPercent    = cpuPercent;
        this.memoryPercent = memoryPercent;
        this.name          = name;
        this.path          = path;
        this.command       = command;
        this.startAt       = startAt;
    }
}

module.exports = Process;