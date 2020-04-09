const ipAddress = require("./main.js");

ipAddress.getFirstIpAddress("172.16.0.0/24", (result, error) => {
    if(error) {
        console.error(error);
    } else {
        console.log(result);
    }
});