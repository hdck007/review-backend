const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createRoom = async (req, res) => {
  try {
    const room = await prisma.room.create({
      data: {},
    });
    console.log(room);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRoom,
};
