import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("select 1+1 as sum;");
  console.log(result.rows);
  response.status(200).json({ "chave:": "teste né" });
}
export default status;