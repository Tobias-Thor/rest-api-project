// Request-and-response-functionality
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ID: ${userId}` });
  };
  