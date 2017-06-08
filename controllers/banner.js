const Banner = require('.././models/banner');


exports.bannerFind = (req,res,next) => {
    // funcion para buscar los registros
    Banner.find((err,response) => {
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
exports.bannerFindById = (req,res) => {
	// funcion para buscar un registros por id
    Banner.findById({_id: req.params.id},(err,response) => {
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
exports.bannerCreate = (req,res) => {
	// funcion para crear registros
    let data = new Banner({
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
exports.bannerUpdate = (req,res) => {
	// funcion para actualizar registros

    let data = new Banner({
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description
    })

    Banner.update({_id:req.params.id},data,(err,response) => {
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
exports.bannerDelete = (req,res) => {
	// escribe tu funcion para eliminar registros
     Banner.remove({_id:req.params.id},(err,response) => {
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
