function Solve(x) {
  let v = document.getElementById("inp");
  v.value += x;
}
function Result() {
  let a = document.getElementById("inp").value;
  document.getElementById("inp").value = eval(a);
}
function Clear() {
  let a = document.getElementById("inp");
  a.value = "";
}
function Delete() {
  let a = document.getElementById("inp");
  a.value = a.value.slice(0, -1);
}
