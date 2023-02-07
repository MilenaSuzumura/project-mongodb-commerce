db.produtos.find({
  $and: [{ nome: { $not: { $eq: "Big Mac" } } }, { nome: { $not: { $eq: "McChicken" } } }] },
  { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });