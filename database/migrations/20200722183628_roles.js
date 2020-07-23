
exports.up = function (knex) {
    return knex.schema.createTable('roles', (table) => {
        table.increments('id');
        table.string('role_name', 30).notNull().unique();
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('roles');
};
