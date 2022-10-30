const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// get or add websites data and return it
const upsertWebsite = async (req, res) => {
  try {
    const { url } = req.body;
    const alreadyExists = await prisma.webSite.findFirst({
      where: {
        url,
      },
    });
    if (alreadyExists) {
      res.status(200).json(alreadyExists);
      return;
    }
    const website = await prisma.webSite.create({
      data: {
        url,
      },
    });
    res.status(201).json(website);
    return;
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = { upsertWebsite };
