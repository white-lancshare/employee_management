const {saveLogsToDB} = require ('../controller/employee')

const logger = (req,res, next) => {
    const date = new Date()


    const result = `API with Endpoint ${req.url} and method: ${req.method} was called at ${date.toLocaleString()}`

    console.log(result)

    next()
}


module.exports = logger