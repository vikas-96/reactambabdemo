// differenciated to key value
export const getKeyValue = props => {
  let options = [];
  options = Object.keys(props).map(key => {
    return { value: key, label: props[key] };
  });

  return options;
};

// differenciated to key value
export const getCityKeyValue = props => {
  let options = [];
  options = Object.keys(props).map(key => {
    return { value: props[key]._id, label: props[key].city };
  });

  return options;
};
