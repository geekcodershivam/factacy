const backgroundColor = [
  'rgba(75,192,192,0.2)',
  'rgb(240,219,79,0.2)',
  'rgb(245,133,54,0.2)',
  'rgb(132,79,209,0.2)',
  'rgb(206,103,154,0.2)',
];
const borderColor = [
  'rgba(75,192,192, 1)',
  'rgba(240,219,79, 1)',
  'rgba(245,133,54,1)',
  'rgba(132,79,209, 1)',
  'rgba(206,103,154, 1)',
];

export default function MakeDataSet(arr) {
  let labels = [];
  let label = [];
  let dataStore = [];

  arr.forEach((element) => {
    labels.push('' + element['year']);
    let countryValueList = element['countryValueList'];
    countryValueList.forEach((curr) => {
      if (label.indexOf(curr['country']) === -1) {
        label.push(curr['country']);
      }
    });
  });

  label.forEach((element) => dataStore.push(new Array(labels.length).fill(0)));

  arr.forEach((element) => {
    let year = element['year'];
    let countryValueList = element['countryValueList'];
    countryValueList.forEach((curr) => {
      let countryIdx = label.indexOf(curr['country']);
      dataStore[countryIdx][year - labels[0]] =
        Math.round(curr['value'] * 100) / 100;
    });
  });

  let datasets = [];

  for (let idx = 0; idx < label.length; idx++) {
    let obj = {};
    obj['label'] = label[idx];
    obj['data'] = dataStore[idx];
    obj['fill'] = true;
    obj['backgroundColor'] = backgroundColor[idx];
    obj['borderColor'] = borderColor[idx];
    obj['borderWidth'] = 1;
    datasets.push(obj);
  }
  let Data = {};
  Data['labels'] = labels;
  Data['datasets'] = datasets;
  return Data;
}
