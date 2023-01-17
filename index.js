const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

/*let totalBatteries = " ";*/

const totalBatteries = batteryBatches.reduce(add, 0);
function add(accumulator, a){
    return accumulator + a;
}
