exports.getHome = (req, res) => {
    res.send('Welcome to this Express server!');
  };
  
  // Provides basic info about the server
  exports.getAbout = (req, res) => {
    res.json({
      server: "Express-server-API-exercise",
      version: "1.0.0",
      author: "Tobias Thor",
    });
  };
  
  exports.postData = (req, res) => {
    res.json({ message: 'Your POST request has been received!' });
  };
  