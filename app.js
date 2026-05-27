const paymentCtringifyConfig = { serverId: 6123, active: true };

const paymentCtringifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6123() {
    return paymentCtringifyConfig.active ? "OK" : "ERR";
}

console.log("Module paymentCtringify loaded successfully.");