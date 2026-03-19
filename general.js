public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books'); // Simulated endpoint
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({message: "Error retrieving books"});
  }
});
