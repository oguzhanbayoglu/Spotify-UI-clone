import React from "react";
import Section from "views/home/Section";

function Home() {
  const items1 = [
    {
      id: 1,
      title: "Lo-Fi Chill",
      description:
        "She was infatuated with color. She didn't have a favorite color per se...",
      img: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
      type: "playlist",
      src: "https://cdn.freesound.org/previews/629/629147_12574855-lq.mp3",
      artist: "Studio Conclusion",
    },
    {
      id: 2,
      title: "Isolation",
      description:
        "The red glint of paint sparkled under the sun. He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago",
      img: "https://images.unsplash.com/photo-1644318295821-12c4ddf2a36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GX5MX2141772/GX5MX2141772.mp3",
      artist: "River Read",
    },
    {
      id: 3,
      title: "Reflections",
      description:
        "He never looked down on those who were less fortunate or who had less money than him",
      img: "https://images.unsplash.com/photo-1502710655568-ee441b74b0b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      type: "artist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU6406933/Daybreak.mp3",
      artist: "Basket Worker News",
    },
    {
      id: 4,
      title: "Flow",
      description:
        "The trail to the left had a 'Danger! Do Not Pass' sign telling people to take the trail to the right.",
      img: "https://images.unsplash.com/photo-1636955779321-819753cd1741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU5781238/GBSMU5781238.mp3",
      artist: "Assumption",
    },
    {
      id: 5,
      title: "One Step Closer",
      description:
        "Day 52 if the marks on the stone were accurate. He couldn't be sure.",
      img: "https://images.unsplash.com/photo-1642840205517-6eb1e2741f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/USUAN1100118/USUAN1100118.mp3",
      artist: "Inspector Hall",
    },
  ];
  const items2 = [
    {
      id: 6,
      title: "Fobia",
      description:
        "It had been the last to be played with and anticipated it would be the next as well.",
      img: "https://images.unsplash.com/photo-1642060880454-fcc688d948f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      type: "artist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU6406930/Isolation.mp3",
      artist: "Possibility Map",
    },
    {
      id: 7,
      title: "Eternal Feelings",
      description:
        "There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter. ",
      img: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GX4R52222014/GX4R52222014.mp3",
      artist: "Employer",
    },
    {
      id: 8,
      title: "Flue Quartet",
      description:
        "Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement",
      img: "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GX5MX2155939/GX5MX2155939.mp3",
      artist: "No One Band",
    },
    {
      id: 9,
      title: "Gentle Pride",
      description:
        "It was the best compliment that he'd ever received although the person who gave it likely never knew.",
      img: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/USUAN1100106/USUAN1100106.mp3",
      artist: "Revenue",
    },
    {
      id: 10,
      title: "Back in Time",
      description:
        "While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year.",
      img: "https://t.scdn.co/images/568f37f1cab54136939d63bd1f59d40c",
      type: "artist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU7257299/GBSMU7257299.mp3",
      artist: "Fortune",
    },
    ,
    {
      id: 13,
      title: "Suite Bergamasque",
      description:
        "There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. ",
      img: "https://images.unsplash.com/photo-1623999673624-50fc42bfc49d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GX5MX2141776/GX5MX2141776.mp3",
      artist: "Impression Village",
    },
    {
      id: 14,
      title: "Childhood Joy",
      description:
        "Many people say that life isn't like a bed of roses. I beg to differ.",
      img: "https://images.unsplash.com/photo-1660967813637-6fc73adf8f99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU5862711/ChildrensJoy.mp3",
      artist: "Speech Lady",
    },
    {
      id: 15,
      title: "Seclusion",
      description:
        "The actual change taking place was difficult to perceive, but the change was real.",
      img: "https://images.unsplash.com/photo-1660909311036-9031ae812d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU6454677/Seclusion.mp3",
      artist: "Newspaper Hospital",
    },
  ];
  const items3 = [
    {
      id: 11,
      title: "Perception of Cosmos",
      description:
        "The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her. Angels could lose their wings",
      img: "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
      type: "playlist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/GBSMU7257299/GBSMU7257299.mp3",
      artist: "Affair Driver",
    },
    {
      id: 12,
      title: "Awaiting Return",
      description:
        "There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. ",
      img: "https://images.unsplash.com/photo-1503528108408-87b0d1c2b785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
      type: "artist",
      src: "https://storage.googleapis.com/synchedin-storage/public/tracks/USUAN1100318/USUAN1100318.mp3",
      artist: "County",
    },
  ];
  return (
    <div className="home">
      <Section title="Recently played" more="/more" items={items3} />
      <Section title="Shows to try" more="/more" items={items2} />
      <Section title="Made for You" more="/more" items={items1} />
    </div>
  );
}

export default Home;
