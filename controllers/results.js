const { Results } = require("../models");
console.log("in results");

async function time(req, res) {
  console.log("in in results");
  /*  try {
      const {time} = req.body;
  
      if (!username || !password)
        return res.redirect("/signup?error=must include username and password");
  
      const user = await User.create(username, password);
  
      if (!user) return res.redirect("/signup?error=error creating new user");
  
      req.session.isLoggedIn = true;
      req.session.save(() => res.redirect("/"));
    } catch (err) {
      console.log(err);
      return res.redirect(`/signup?error=${err.message}`);
    }*/
   
   // router.post("/calculate", (req,res) => {
    //  console.log("calc");
    try {
      const {distance, speed} = req.body;
      console.log("distance",distance,"speed",speed);
      if(!distance || !speed) {
        console.log("inif")
          return res.render('index', { result: 'please provide both distance and speed.'});
      }
      const mytime = distance / speed;
      console.log("mytime", mytime)
     res.render('index', { result: `time required: $(time} hours`});
     req.session.save(() => res.redirect("/calculate")); 
    } catch (err) {
      console.log(err)
    }
  }
 /*async function create(req, res, next) {
  const {distance, speed} = req.body
  try {
    const newResult = await new Results ({
      distance,
      speed,
      time
    })
  if (!(title && body)) {
    return res.status(400).send('result must include distance and speed')
  };
  await newResult.save()
  res.status(200).json(Results)
  } catch {
    res.status(500).send(err.message)
  }
//-------------*/
//module.exports = router;

  //}

module.exports = { time };