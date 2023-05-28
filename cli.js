#!/usr/bin/env node

process.stdin.setEncoding('utf8');
const os = require('os');
const { username } = os.userInfo();

const handleCLI = (command) => {
    switch (command) {
        case 'os --cpus':
            const formattedCpuInfo = {
                amoutOfCpus: os.cpus().length,
                rateClock: os.cpus().map(({ model, speed }) => ({ model, speed: `${speed * 0.001} GHZ` }))
            }
            console.log("CPU Information --->", formattedCpuInfo);
            break;
        case 'os --homedir':
            const homedir = os.homedir();
            console.log("Home Directory --->", homedir);
            break;
        case 'os --username':
            console.log("Username --->", username);
            break;
        case 'os --architecture':
            const arch = os.arch();
            console.log("Architecture --->", arch);
            break;
        case 'os --hostname':
            const hostName = os.hostname();
            console.log("Hostname --->", hostName);
            break;
        case 'os --platform':
            const platform = os.platform();
            console.log("Platform --->", platform);
            break;
        case 'os --memory':
            const memory = os.totalmem();
            console.log("Total Memory in bytes --->", memory);
            break;
        case ".exit":
            console.log(`Thank you ${username}, goodbye!`)
            process.exit(0);
        default:
            console.log("Invalid command");
    }
}

const userInput = () => {
    console.log(`Welcome ${username}`);
    process.stdout.write('> ');

    process.stdin.on('data', (input) => {
        const command = input.trim();
        handleCLI(command);
        process.stdout.write('> ');
    });
}

userInput();