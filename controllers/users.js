const User = require('.././models/user');

// Function to show all Users
exports.users = (req,res) => {
	 User.find((err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}

// Function create User
exports.createuser = (req,res) => {
    let data = new User({
        name: req.body.name,
		password: req.body.password,
		admin: req.body.admin,
		date: new Date()
    });

	data.save((err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}

// Function to find by id User
exports.userid = (req,res) => {

   User.findById({_id: req.params.id},(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })

}

// function delete
exports.delete = (req,res) => {
   User.remove({_id:req.params.id},(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}

//function update
exports.update = (req,res) => {
	let data = new User({
		_id: req.params.id,
		name: req.body.name,
		password: req.body.password,
		admin: req.body.admin,
		date: new Date()
	});

    User.update({_id:req.params.id},data,(err,response) => {
		if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
	});
}