import { SMTPClient } from 'emailjs';


export default function handler(req, res) {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  if (!email) {
    res.status(400).end(JSON.stringify({ message:"Error email" }))
    return;
  }
  const client = new SMTPClient({
    user: "postmaster@recens.flowers",
    password: "jhd3dzw!JKT_ebd0kcx",
    host: 'mail.nic.ru',
    ssl:true
  });

  try{
    client.send(
        {
          text: `От: ${name}\n\rТелефон: ${phone}\n\rEmail: ${email}`,
          from: 'postmaster@recens.flowers',
          to: 'info@recens.flowers',
          subject: 'Новая заявка',

        }
    )
  }
  catch(e){
    res.status(400).end(JSON.stringify({ message:"Error" }))
    return;
  }

  res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}
