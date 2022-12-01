const prom = Notification.requestPermission();
prom.then((param) => {
  console.log(param);
});
prom.catch((err) => {
  console.log(err);
});
