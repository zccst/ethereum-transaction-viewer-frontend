'use strict';

(async() => {


const NacosNamingClient = require('nacos').NacosNamingClient;
const logger = console;

const client = new NacosNamingClient({
    logger,
    serverList: 'online-nacosapi.okg.com:80', // replace to real nacos serverList
    namespace: 'public',
});
await client.ready();

const serviceName = 'oktcstudio_txtrace_frontend';

// registry instance
await client.registerInstance(serviceName, {
    ip: '10.2.3.199',
    port: 20059,
});
// await client.registerInstance(serviceName, {
//     ip: '2.2.2.2',
//     port: 8080,
// });

// subscribe instance
// client.subscribe(serviceName, hosts => {
//     console.log(hosts);
// });

// deregister instance
// await client.deregisterInstance(serviceName, {
//     ip: '1.1.1.1',
//     port: 8080,
// });
})()