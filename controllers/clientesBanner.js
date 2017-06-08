const ClientesBanner = require('.././models/clientesBanner');


exports.clientesBannerFind = (req,res,next) => {
    // funcion para buscar los registros
    ClientesBanner.find((err,response) => {
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
exports.clientesBannerFindById = (req,res) => {
	// funcion para buscar un registros por id
    ClientesBanner.findById({_id: req.params.id},(err,response) => {
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
exports.clientesBannerCreate = (req,res) => {
	// funcion para crear registros
    let data = new ClientesBanner({
        name: req.body.name,
        description: req.body.description
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
exports.clientesBannerUpdate = (req,res) => {
	// funcion para actualizar registros

    let data = new ClientesBanner({
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description
    })

    ClientesBanner.update({_id:req.params.id},data,(err,response) => {
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
exports.clientesBannerDelete = (req,res) => {
	// escribe tu funcion para eliminar registros
     ClientesBanner.remove({_id:req.params.id},(err,response) => {
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
