import db from "../models/index";
const { Op } = require("sequelize");

const getTicket = async (req, res) => {
  try {
    const data = await db.Ticket.findAll();
    return res.status(200).json(data);
  } catch (error) {
    console.log(e);
  }
};

const searchTicket = async (req, res) => {
  const query = { ...req.body };
  delete query.price;
  delete query.flightTime;
  try {
    const data = await db.Ticket.findAll({
      where: query,
      order: [["price", "ASC"]],
    });
    return res.json(
      data.filter(
        (item) =>
          parseInt(item.price) <= req.body.price &&
          item.flightTime.slice(0, 2) >= req.body.flightTime.from &&
          item.flightTime.slice(0, 2) <= req.body.flightTime.to
      )
    );
  } catch (error) {
    return res.send(error);
  }
};

const addTicket = async (req, res) => {
  try {
    await db.Ticket.create(req.body);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(e);
  }
};

module.exports = {
  getTicket: getTicket,
  searchTicket: searchTicket,
  addTicket: addTicket,
};
