// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    console.log("mkmkkmkkmmkmk");
    const subject = event.queryStringParameters.name || "World";
    return {
      
      statusCode: 200,
      body: JSON.stringify({ msg: `Hello ${subject}` })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
