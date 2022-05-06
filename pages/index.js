import { useState, useEffect, Fragment } from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

import { MongoClient } from 'mongodb';

const initial_meetups = [
  {
    id: 'm1',
    title: 'test',
    image: 'someImage',
    description: 'some desc',
    address: 'some address',
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Course project on react next js"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  let uri =
    'mongodb://admin:admin12345@cluster0-shard-00-00.qfsgi.mongodb.net:27017,cluster0-shard-00-01.qfsgi.mongodb.net:27017,cluster0-shard-00-02.qfsgi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p9on4q-shard-0&authSource=admin&retryWrites=true&w=majority';

  const client = new MongoClient(uri);
  let meetups;
  try {
    // const data = req.body;

    await client.connect();

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    meetups = await meetupsCollection.find().toArray();

    console.log(meetups);

    // res.status(201).json({ message: 'Meetup inserted.' });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }

  if (!meetups) meetups = initial_meetups;
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        id: meetup._id.toString(),
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
