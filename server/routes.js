const { Router } = require('express');
const { gateways } = require('../db/models')

const router = Router();

router.post('/api/v1/gateways', async (req, res, next) => {
    try {
    req.body.kernel_version = req.body.kernelVersion
    req.body.jm_event_type = req.body.jmEventType
    req.body.firmware_version = req.body.firmwareVersion
    req.body.home_id = req.body.homeId
    req.body.time_zone = req.body.timeZone

    delete req.body.kernelVersion
    delete req.body.jmEventType
    delete req.body.firmwareVersion
    delete req.body.homeId
    delete req.body.timeZone

    await gateways.create(req.body)
}
    catch(err){
        next(err)
    }
})

module.exports = router;