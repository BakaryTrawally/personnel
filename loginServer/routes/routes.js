const express = require("express")
const router = express.Router()
const loginUserCopy = require("../models/loginModel")


// post data to mongodb database
router.post('/post', (req, res) => {
    loginUser = new loginUserCopy({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    loginUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(e =>{
        res.json(e)
    })
} )


// login view
// router.post('/login', (req, res) => {
//     const { email, password } = req.body
//     loginUserCopy.findOne({ email: email })
//     .then(user =>{
//         if(user){
//             if(user.password === password){
//                 res.json("Success")
//                 console.log(user)
//             }
//             else{
//                 res.json("user incorrect")
//                 console.log(`Incorrect password or email`)
//             }
//         } else{
//             res.json("No record existed")
//         }
       
//     })
// })

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  loginUserCopy.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {

          // ✅ RETURN USER DETAILS
          return res.json({
            status: "Success",
            name: user.name,
            email: user.email,
            id: user._id
          });

        } else {
          return res.json({ status: "Error", message: "Incorrect password" });
        }
      } else {
        return res.json({ status: "Error", message: "No record existed" });
      }
    })
    .catch(err => res.json({ status: "Error", message: err.message }));
});



// get the data to display it on interface
router.get('/post', async (req, res) => {
    const result = await loginUserCopy.findOne({});
    res.send(result)
})


// get for updating 
router.get('/update/:id', async (req, res) =>{
    const { id} = req.params;
    try{
        const updatedData  = await loginUserCopy.findById(id)
        res.json(updatedData)

    } catch(err) {
       res.status(500).json({ error: "Server error "})
    }
})


//update data
router.put('/update/:id', (req, res) =>{
    const { id } = req.params;
    loginUserCopy.findByIdAndUpdate((id), req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

module.exports = router