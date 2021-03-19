
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function(table){
        table.increments(); // chave recebe 1,2,3
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); //Seta o pertencimento a tabela ongs
    })
};

exports.down = function(knex) {
  return table.schema.dropTable('incidents');
};
