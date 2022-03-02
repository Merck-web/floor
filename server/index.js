const fastify = require('fastify')({
    logger: true
})
const nodemailer = require('nodemailer')

fastify.register(require('fastify-cors'), {})

fastify.post('/email', async (request, response) => {
    try {
        const email = request.body.email
        const name = request.body.name
        const phone = request.body.phone
        if (!email) {
            response.send({"error": "Email is not received"})
        }
        console.log(email, name, phone)
        let emailAccount = await nodemailer.createTestAccount()
        let trasnporter = nodemailer.createTransport({
            host: 'mail.nic.ru',
            port: 465,
            secure: true,
            auth: {
                user: "postmaster@recens.flowers",
                pass: "jhd3dzw!JKT_ebd0kcx"
                // user: 'info@recens.flowers',
                // pass: 'djk0xnc1fpg.cgz@GBH'
            }
        })
        await trasnporter.sendMail({
            from: 'postmaster@recens.flowers',
            to: 'info@recens.flowers',
            subject: 'Новая заявка',
            text: `От: ${name}\n\rТелефон: ${phone}\n\rEmail: ${email}`
        })
        response.send({"result": "success"})
    } catch (e) {
        console.log(e)
        response.send({"error": e})
    }

})

fastify.listen(3001, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
