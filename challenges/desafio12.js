db.produtos.updateMany({
  $nor: [
    { nome: { $eq: "McChicken" } },
    { ingredientes: { $elemMatch: { $eq: "ketchup" } } },
  ] },
  { $push: { ingredientes: "ketchup" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });