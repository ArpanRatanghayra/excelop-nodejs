const csv = require('csvtojson');
let arr = [];
let tot_cost, tot_hrs;
const converter = csv()
  .fromFile('./Data.csv')
  .then((json) => {
    json.forEach((row) => {
      //console.log(row);
      if (row['STATUS'] == 'Project Name') {
        tot_cost = row['FIXED COST'];
        tot_hrs = row['ACTUAL HRS'];
      } else {
        arr.push({
          status: row['STATUS'],
          priority: row['PRIORITY'],
          deadline: row['DEADLINE'],
          fixed_cost: row['FIXED COST'],
          actual_hrs: row['ACTUAL HRS'],
        });
      }
    });
  })
  .then(() => {
    console.table(arr);
    console.log('Total amount of Fixed Costs: ' + tot_cost);
    console.log('Total of Actual Hrs: ' + tot_hrs);
  });
