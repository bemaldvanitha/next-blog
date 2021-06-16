const handler = (req,res) => {
    if(req.method === 'POST'){

        const { email, name, message } = req.body;

        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
            return res.status(422).json({ message: 'invalid input' });
        }

        const newMessage = {
            email: email,
            name: name,
            message: message
        }

        return res.status(201).json({ message: 'successfully added', data: newMessage });
    }
}

export default handler;