import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

function MeetupDetails(props) {
  const selectedMeetup = props.meetupData;

  return (
    <Fragment>
      <Head>
        <title>{selectedMeetup.title}</title>
        <meta name='description' content='Course project on react next js' />
      </Head>
      <MeetupDetail
        image={selectedMeetup.image}
        address={selectedMeetup.address}
        title={selectedMeetup.title}
        description={selectedMeetup.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  let uri =
    'mongodb://admin:admin12345@cluster0-shard-00-00.qfsgi.mongodb.net:27017,cluster0-shard-00-01.qfsgi.mongodb.net:27017,cluster0-shard-00-02.qfsgi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p9on4q-shard-0&authSource=admin&retryWrites=true&w=majority';

  const client = new MongoClient(uri);
  let meetups;
  try {
    // const data = req.body;

    await client.connect();

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    // res.status(201).json({ message: 'Meetup inserted.' });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  let uri =
    'mongodb://admin:admin12345@cluster0-shard-00-00.qfsgi.mongodb.net:27017,cluster0-shard-00-01.qfsgi.mongodb.net:27017,cluster0-shard-00-02.qfsgi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p9on4q-shard-0&authSource=admin&retryWrites=true&w=majority';

  const client = new MongoClient(uri);
  let selectedMeetup;
  try {
    // const data = req.body;

    await client.connect();

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    selectedMeetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });

    // res.status(201).json({ message: 'Meetup inserted.' });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        title: selectedMeetup.title,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
