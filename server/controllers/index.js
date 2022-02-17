// interval to send data to the client (in miliseconds)
const sendInterval = Number(process.env.SEND_INTERVAL) || 1000;

// interval for client retry (in miliseconds, default is 3000)
const retryInterval = Number(process.env.RETRY_INTERVAL) || 3000;

// events controller
// send server from event
const events = (req, res) => {
  // headers needed for SSE
  const headers = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-control',
    'Connection': 'keep-alive',
  };

  // set response header & 200 as response code 
  res.writeHead(200, headers);

  // event sent in interval
  return setInterval(() => {
    sendEvent(res, 'Hello there');
  }, sendInterval);
}

// event sender
// (res) first param for sending response
// (data) second param for data to be sent to the client, you may change it to vary for each time event called
const sendEvent = (res, data) => {
  // id for sse
  const id = new Date().toDateString();

  // sse in server has 3 specifiec field: retry, id, and data
  // each writen with colon after it and space after the content
  // each line separated by \n
  res.write(`retry: ${retryInterval}\n`);
  res.write(`id: ${id}\n`);
  res.write(`data: ${data}\n\n`); // double \n for last line
}

// export controllers
module.exports = {
  events,
}