function somar(n1, n2) {
  if (typeof n1 != "number" || typeof n2 != "number") return "erro";
  return n1 + n2;
}

exports.somar = somar;
