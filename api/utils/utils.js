module.exports = {
  displayStatus: (res, code, message, data) => {
    res.status(code).json({
      responseCode: code,
      responseMessage: message,
      responseData: data,
    });
  },
  stringify: (data) => {
    return JSON.stringify(data);
  },
  parse: (data) => {
    return JSON.parse(data);
  },
};
