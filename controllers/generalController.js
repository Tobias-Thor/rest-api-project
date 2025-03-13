exports.getHome = (req, res) => {
    res.send('Welcome to this Express server!');
  };
  
  exports.getAbout = (req, res) => {
    res.json({
      server: "Express server",
      version: "1.0.0",
      author: "Your name",
    });
  };
  
  exports.postData = (req, res) => {
    res.json({ message: 'Your POST request has been received!' });
  };
  