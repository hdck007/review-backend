const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getMarkers = async (req, res) => {
  try {
    const { urlId, roomId } = req.query;
    const markers = await prisma.marker.findMany({
      where: {
        AND: [
          {
            webSiteId: +urlId,
          },
          {
            roomId: +roomId,
          },
        ],
      },
    });
    res.status(200).json(markers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createMarker = async (req, res) => {
  try {
    const {
      urlId, selector, comment, type, roomId,
    } = req.body;
    const marker = await prisma.marker.create({
      data: {
        selector,
        comment,
        type,
        webSite: {
          connect: {
            id: +urlId,
          },
        },
        room: {
          connect: {
            id: +roomId,
          },
        },
      },
    });
    res.status(201).json(marker);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMarkers,
  createMarker,
};
