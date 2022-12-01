import fetch from "node-fetch";

const prom1 = Notification.requestPermission();
// obtenemos un exito
const prom2 = prom1.then((param) => {
  if ("granted" === param) {
    console.log("dijo que si");
    return true;
  } else {
    console.log("Dijo que no");
    return false;
  }
});

prom2.then((r) => {});

// si obtenemos un error
prom1.catch((err) => {
  console.log(err);
});

// finally siempre se ejecuta
prom1.finally(() => {
  console.log("siempre se ejecuta");
});

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    console.log(`Termina con estado ${response.status}`);
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((e) => console.error(e));

const prom3 = new Promise((resolve, reject) => {
  console.log("Me ejecuto asincronamente");
  resolve(42);
});

prom3.then((res) => {
  console.log(res);
});
