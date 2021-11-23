const biner = document.getElementById("biner");
const oktal = document.getElementById("oktal");
const decimal = document.getElementById("decimal");
const hexa = document.getElementById("hexa");

biner.addEventListener("click", function () {
  let input = document.getElementById("inputan").value;
  let output = document.getElementById("keluaran");
  let format = document.getElementById("format").value;
  document.getElementById("format").style.borderColor = "";
  if (format == "2") {
    output.value = input;
  } else if (format == "10") {
    let a = parseInt(input);
    let b = a.toString(2);
    output.value = b;
  } else if (format == "8") {
    let a = parseInt(input, 8);
    let b = a.toString(2);
    output.value = b;
  } else if (format == "16") {
    let a = parseInt(input, 16);
    let b = a.toString(2);
    output.value = b;
  } else if (format == "") {
    document.getElementById("format").style.borderColor = "#f80000";
    output.value = "Masukan Basis Bilangan Bre....";
  }
});
oktal.addEventListener("click", function () {
  let input = document.getElementById("inputan").value;
  let output = document.getElementById("keluaran");
  let format = document.getElementById("format").value;
  document.getElementById("format").style.borderColor = "";
  if (format == "8") {
    output.value = input;
  } else if (format == "2") {
    let a = parseInt(input, 2);
    let b = a.toString(8);
    output.value = b;
  } else if (format == "10") {
    let a = parseInt(input);
    let b = a.toString(8);
    output.value = b;
  } else if (format == "16") {
    let a = parseInt(input, 16);
    let b = a.toString(8);
    output.value = b;
  } else if (format == "") {
    document.getElementById("format").style.borderColor = "#f80000";
    output.value = "Masukan Basis Bilangan Bre....";
  }
});
decimal.addEventListener("click", function () {
  let input = document.getElementById("inputan").value;
  let output = document.getElementById("keluaran");
  let format = document.getElementById("format").value;
  document.getElementById("format").style.borderColor = "";
  if (format == "10") {
    output.value = input;
  } else if (format == "2") {
    let a = parseInt(input, 2);
    output.value = a;
  } else if (format == "8") {
    let a = parseInt(input, 8);
    output.value = a;
  } else if (format == "16") {
    let a = parseInt(input, 16);
    output.value = a;
  } else if (format == "") {
    document.getElementById("format").style.borderColor = "#f80000";
    output.value = "Masukan Basis Bilangan Bre....";
  }
});
hexa.addEventListener("click", function () {
  let input = document.getElementById("inputan").value;
  let output = document.getElementById("keluaran");
  let format = document.getElementById("format").value;
  document.getElementById("format").style.borderColor = "";
  if (format == "16") {
    output.value = input.toUpperCase();
  } else if (format == "2") {
    let a = parseInt(input, 2);
    let b = a.toString(16);
    output.value = b.toUpperCase();
  } else if (format == "8") {
    let a = parseInt(input, 8);
    let b = a.toString(16);
    output.value = b.toUpperCase();
  } else if (format == "10") {
    let a = parseInt(input);
    let b = a.toString(16);
    output.value = b.toUpperCase();
  } else if (format == "") {
    document.getElementById("format").style.borderColor = "#f80000";
    output.value = "Masukan Basis Bilangan Bre....";
  }
});
