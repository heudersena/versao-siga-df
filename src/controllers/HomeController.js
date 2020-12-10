const db = require("../database/knex");
const table = "relatorios";

class HomeController {
  async index(req, res, next) {
    const response = await db(table).select("*");
    console.log("GET/", new Date());
    res.render("index.html", { data: response });
  }

  view_store(req, res) {
    res.render("view_store.html");
  }

  async view_edit(req, res) {
    const { id } = req.params;
    const response = await db(table)
      .select("*")
      .where({
        id_usuario: id,
      })
      .first("*");
    console.log(response);
    res.render("view_edit.html", { data: response });
  }

  async update(req, res) {
    const { id, maquina, setor, ip, versaosiga } = req.body;
    const response = await db(table)
      .where({ id_usuario: id })
      .update({ maquina, setor, ip, versaosiga });
    if (response) {
      res.redirect("/");
      return;
    } else {
      res.redirect(`/editar/${id}`);
      return;
    }
  }

  async store(req, res) {
    const { maquina, setor, ip, versaosiga } = req.body;
    const response = await db(table).insert({ maquina, setor, ip, versaosiga });
    console.log("POST/", new Date());
    if (response) {
      res.redirect("/");
      return;
    } else {
      res.redirect("/new");
      return;
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const response = await db(table).where({ id_usuario: id }).delete();

     if (response) {
      res.redirect("/");
      return;
    } else {
      res.redirect(`/editar/${id}`);
      return;
    }
  }
}

module.exports = new HomeController();
