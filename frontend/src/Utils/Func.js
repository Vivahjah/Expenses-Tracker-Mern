import _ from "lodash";

export const getSum = (transaction, type) => {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, keys) => {
      //if the type params is not pass
      if (!type) return _.sumBy(objs, "amount"); //[300,200,200]
      return {
        type: keys,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
};

export const getLabels = (transaction) => {
  let amountSum = getSum(transaction, "type");
  let Total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

    return percent;
};

export const chartData = (transaction, custom) => {
    let dataValue = getSum(transaction);
    let bg = _.map(transaction, a => a.color)
    bg = _.uniq(bg)
    
    const config = {
        data: {
          datasets: [
            {
              label: "My First Dataset",
              data: dataValue,
              backgroundColor:bg,
              hoverOffset: 4,
              borderRadius : 30,
              spacing : 10
            },
          ],
        },
        options : {
          cutout : 115,
          
        }
      };
      return custom ?? config

}


export const getTotal = (transaction) => _.sum(getSum(transaction))