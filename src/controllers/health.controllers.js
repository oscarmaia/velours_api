export async function Health(req, res) {
  try {
    res.send("status from controller").status(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
