const Servicios = require('.././models/servicios');


exports.serviciosFind = (req,res,next) => {
    // funcion para buscar los registros
    Servicios.find((err,response) => {
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
exports.serviciosFindById = (req,res) => {
	// funcion para buscar un registros por id
    Servicios.findById({_id: req.params.id},(err,response) => {
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
exports.serviciosCreate = (req,res) => {
	// funcion para crear registros
    let data = new Servicios({
        name: req.body.name,
        description: req.body.description,
        home: req.body.home,
        icon: req.body.icon
    })

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
exports.serviciosUpdate = (req,res) => {
	// funcion para actualizar registros

    let data = new Servicios({
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        home: req.body.home,
        icon: req.body.icon
    })

    Servicios.update({_id:req.params.id},data,(err,response) => {
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
exports.serviciosDelete = (req,res) => {
	// escribe tu funcion para eliminar registros
     Servicios.remove({_id:req.params.id},(err,response) => {
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
