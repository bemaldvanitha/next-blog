import { MongoClient } from 'mongodb';

const handler = async (req,res) => {
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

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.2jyrs.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        try{
            client = await MongoClient.connect(connectionString);

        }catch (err){
            return res.status(500).json({ message: 'could not connect to db' });
        }

        const db = client.db();

        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;

        }catch (err){
            await client.close();
            return res.status(500).json({ message: 'store message fail' });
        }

        client.close();

        return res.status(201).json({ message: 'successfully added', data: newMessage });
    }
}

export default handler;