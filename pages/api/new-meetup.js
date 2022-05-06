import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    let uri =
      'mongodb://admin:admin12345@cluster0-shard-00-00.qfsgi.mongodb.net:27017,cluster0-shard-00-01.qfsgi.mongodb.net:27017,cluster0-shard-00-02.qfsgi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p9on4q-shard-0&authSource=admin&retryWrites=true&w=majority';

    const client = new MongoClient(uri);
    try {
      const data = req.body;

      await client.connect();

      const db = client.db();

      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      res.status(201).json({ message: 'Meetup inserted.' });
    } catch (err) {
      console.log(err);
    } finally {
      client.close();
    }

    // const client = await MongoClient.connect(
    //   ''
    // );
  }
}

export default handler;
