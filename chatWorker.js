let ports = [];

onconnect = function (event) {
  const port = event.ports[0];
  ports.push(port);

  port.onmessage = function (event) {
    ports.forEach((p) => {
      p.postMessage(event.data);
    });
  };

  port.start();
};
