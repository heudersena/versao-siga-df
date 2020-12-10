const router = require("express").Router();

const Home = require("../controllers/HomeController");

router.get("/", Home.index);
router.get("/new", Home.view_store);
router.get("/editar/:id", Home.view_edit);
router.post("/new", Home.store);
router.post("/edit", Home.update);
router.get("/deletar/:id", Home.destroy);

module.exports = router;
