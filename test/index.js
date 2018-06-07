const js = import("@kylejlin/wasm-add/wasm_add.js");
js.then(js => {
  js.alert_add(3, 2);
})
