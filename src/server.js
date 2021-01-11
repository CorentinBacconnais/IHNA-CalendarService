const app = require('./app')
var {portCalendarService} = require('../../IHNA_Utils/ihna_port')

app.listen(portCalendarService, () => {
  console.log(`App listening in ${portCalendarService}`)
})