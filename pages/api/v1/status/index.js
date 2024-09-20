function status(request, response) {
  response.status(200).json({ "chave:": "teste né" });
}
export default status;
