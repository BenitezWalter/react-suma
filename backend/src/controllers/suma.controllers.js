ctrlSuma = {}

ctrlSuma.postSuma = async (req,response) =>{
    try {
        const {n1,n2} = req.body

        return response.json({
            msg:"Suma realizada",
            resultado: n1+n2
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = ctrlSuma