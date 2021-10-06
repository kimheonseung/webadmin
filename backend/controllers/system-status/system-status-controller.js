const si = require('systeminformation');

const Ram               = require('../../classes/system-status/Ram');
const Disk              = require('../../classes/system-status/Disk');
const Network           = require('../../classes/system-status/Network');
const NetworkConnection = require('../../classes/system-status/NetworkConnection');
const Process           = require('../../classes/system-status/Process');

const space4 = '    ';

const printRam = (ram) => {
    console.log('=========== RAM ===========');
    console.log(lspaceFormat('TOT') + space4 + lspaceFormat('USED') + space4 + lspaceFormat('AVAIL') + space4 + lspaceFormat('PER'));
    console.log(lspaceFormat(ram.total+'GB') + space4 + lspaceFormat(ram.used+'GB') + space4 + lspaceFormat(ram.available+'GB') + space4 + lspaceFormat(ram.usedPercent+'%'));
}
const printDisk = (diskArray) => {
    console.log('=========== DISK USAGE ===========');
    console.log(lspaceFormat('VOL', 5) + space4 + lspaceFormat('TYPE', 5) + space4 + lspaceFormat('TOT', 9) + space4 + lspaceFormat('USED', 9) + space4 + lspaceFormat('AVAIL', 9) + space4 + lspaceFormat('PER'));
    diskArray.forEach(disk => {
        console.log(lspaceFormat(disk.name, 5) + space4 + lspaceFormat(disk.type, 5) + space4 + lspaceFormat(disk.total+'GB', 9) + space4 + lspaceFormat(disk.used+'GB', 9) + space4 + lspaceFormat(disk.available+'GB', 9) + space4 + lspaceFormat(disk.usedPercent+'%'));
    })

}
const printNetwork = (network) => {
        console.log('=========== NETWORK ===========');
        console.log(lspaceFormat('IP', 16) + space4 + lspaceFormat('SPEED', 12) + space4 + lspaceFormat('MAC', 20) + space4 + lspaceFormat('RECEIVED', 12) + space4 + lspaceFormat('TRANSFERRED', 12));
        console.log(lspaceFormat(network.ip, 16) + space4 + lspaceFormat(network.speed+'MBit/s', 12) + space4 + lspaceFormat(network.mac, 20) + space4 + lspaceFormat(network.rx+'MB', 12) + space4 + lspaceFormat(network.tx+'MB', 12));
}
const printNetworkConnectionArray = (networkConnectionArray) => {
    console.log(lspaceFormat('PROTOCOL', 8) + space4 + lspaceFormat('LOCAL', 40) + space4 + lspaceFormat('PEER', 40) + space4 + lspaceFormat('STATUS', 10) + space4 + lspaceFormat('PID', 10));
    networkConnectionArray.forEach(networkConnection => {
        console.log(lspaceFormat(networkConnection.protocol, 8) + space4 + lspaceFormat(networkConnection.local, 40) + space4 + lspaceFormat(networkConnection.peer, 40) + space4 + lspaceFormat(networkConnection.status, 10) + space4 + lspaceFormat(networkConnection.pid, 10));
    })
}
const printProcessArray = (processArray) => {
    console.log('=========== PROCESSES ===========');
    console.log(lspaceFormat('PID') + space4 + lspaceFormat('PPID') + space4 + lspaceFormat('CPU') + space4 + lspaceFormat('MEM') + space4 + 'NAME');
    processArray.forEach(process => {
        console.log(lspaceFormat(process.pid) + space4 + lspaceFormat(process.parentPid) + space4 + lspaceFormat(process.cpuPercent.toFixed(2)+'%') + space4 + lspaceFormat(process.memoryPercent.toFixed(2)+'%') + space4 + process.name);
    })
}


const lspaceFormat = (value, space) => {
    let sp = 7;
    if(space)
        sp = space;
    let leftSpace = '';
    for(let i = 0 ; i < sp ; ++i) 
        leftSpace += ' ';
    return String(leftSpace+value).slice(-sp);
}


exports.getCpuData = async () => {
    try {

        const data = await si.cpu();

        return data;
        
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}



exports.getRamData = async () => {
    try {
        const data = await si.mem();
        const ram = new Ram(data.total, data.used, data.available);
        ram.toGB();
        // printRam(ram);
        return ram;
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}

exports.getProcessData = async () => {
    try {
        const data = await si.processes();
        const processArray = [];
        data.list.forEach((process) => {
            const ps = new Process(process.pid, process.parentPid, process.cpu, process.mem, process.name, process.path, process.command, process.started);
            processArray.push(ps);
        });
        // printProcessArray(processArray);
        return processArray;
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}

exports.getDiskData = async () => {
    try {
        const data = await si.fsSize();
        const diskArray = [];
        data.forEach(volume => {
            const disk = new Disk(volume.fs, volume.type, volume.size, volume.used, volume.available, volume.use);
            disk.toGB();
            diskArray.push(disk);
        });
        // printDisk(diskArray);
        return diskArray;
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}

exports.getNetworkData = async () => {
    try {
        const niData = await si.networkInterfaces();
        const nsData = await si.networkStats("*");
        const iface  = niData[0];
        const stat   = nsData[0];
        
        const network = new Network(iface.ip4, iface.speed, iface.mac, stat.rx_bytes, stat.tx_bytes);
        network.toMB();
        // printNetwork(network);
        return network;
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}

exports.getNetworkConnectionData = async () => {
    try {
        const ncData = await si.networkConnections();
        const networkConnectionArray = [];
        ncData.forEach(connection => {
            const networkConnection = new NetworkConnection(connection.protocol, connection.localAddress, connection.localPort, connection.peerAddress, connection.peerPort, connection.state, connection.pid);
            networkConnectionArray.push(networkConnection);
        });
        // printNetworkConnectionArray(networkConnectionArray);
        return networkConnectionArray;
    } catch (error) {
        console.log(error);
        return {
            'error': error
        }
    }
}