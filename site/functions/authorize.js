require("dotenv").config();

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      authKey: "foobar!!!"
    }
  });
};
