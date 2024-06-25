exports.checkExpiredPackage = async (req, res) => {
  const currentDate = new Date();
  const expirationDate = new Date(req.expired);

  if (currentDate > expirationDate) {
    return res.status(400).json({ error: "Package has expired." });
  }else {
    return res.status(200).json({ error: "Active Package." });
  }
};
