db.produtos.updateMany({ nome: "Big Mac" },
{ $push: { ingredientes: "bacon" } });

db.produtos.updateMany({ nome: "Quarteirão com Queijo" },
{ $push: { ingredientes: "bacon" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });