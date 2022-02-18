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
    sendEvent(res, 'Hello there!', 'greetings');
    sendEvent(res, 'Hi there!');
  }, sendInterval);
}

// event sender
// (res) first param for sending response
// (data) second param for data to be sent to the client, you may change it to vary for each time event called
const sendEvent = (res, data, event = '') => {
  // id for sse
  const id = new Date().toDateString();

  // sse in server has 4 specifiec field: event, retry, id, and data
  // each writen with colon after it and space after the content
  // each line separated by \n
  
  // send event field only when function called with third parameter
  if (event) {
    res.write(`event: ${event}\n`); // set event, client can listen to this event's message or to all message
  }

  res.write(`retry: ${retryInterval}\n`); // time before retry when client lost its connection to server
  res.write(`id: ${id}\n`); // id of the message
  res.write(`data: ${data}\n\n`); // content of the message, double \n for last line
}

// export controllers
module.exports = {
  events,
}