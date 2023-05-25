const { Videogame } = require("../db");

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    await Videogame.destroy({ where: { id } });
    res.send("¡Juego eliminado con éxito!");
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Ha ocurrido un error al eliminar el juego." });
  }
};

module.exports = { deleteGame };
