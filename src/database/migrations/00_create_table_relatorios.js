exports.up = function (knex) {
  return knex.schema.createTable("relatorios", function (t) {
    t.increments("id_usuario").unsigned().primary();

    t.string("maquina")
    t.string("setor")
    t.string("ip")
    t.string("versaosiga")
    

    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("relatorios");
};
