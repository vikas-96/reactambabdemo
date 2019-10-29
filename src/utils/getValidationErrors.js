export default function(error) {
  let errorData = {};
  if (error.response && error.response.status === 422) {
    let fields = error.response.data.errors;
    Object.keys(fields).forEach(function(key) {
      errorData[key] = fields[key][0];
    });
    return errorData;
  }

  return {};
}
