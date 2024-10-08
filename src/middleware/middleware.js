const ORIGINS_VALID = [

];

const originControl = (req, res, next) => {

  const { origin } = req.headers;
  console.log("🚀 ~ originControl ~ origin:", origin)

  if (!origin || ORIGINS_VALID.includes(origin)) {
    next();
  }

}

module.exports = {
  originControl
}