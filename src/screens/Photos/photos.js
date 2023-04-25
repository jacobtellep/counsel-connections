import { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: '/photos/296355920_6006118319416449_2226094069189501875_n.jpg',
    width: 220,
    height: 294,
  },
  {
    src: '/photos/296374716_6006118009416480_7744308262609884371_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/296451009_6006118219416459_3697141438726078489_n.jpg',
    width: 218,
    height: 168,
  },
  {
    src: '/photos/296453685_6006118086083139_7855896049943702686_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/296467814_6006118186083129_1424220265945358279_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/296477111_6006117869416494_862511933905057007_n.jpg',
    width: 218,
    height: 166,
  },
  {
    src: '/photos/296750359_6006117886083159_7024408134624564580_n.jpg',
    width: 216,
    height: 161,
  },
  {
    src: '/photos/299130196_6034722496556031_8664059223268837830_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299166564_6034723336555947_764693695763899537_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299174448_6034722823222665_6279724264768159995_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299229972_6034722633222684_1799767602110038156_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299279037_6034723313222616_4835278642835996712_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299328853_6034722786556002_32806667080408252_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299387799_6034722483222699_7391374212210632503_n.jpg',
    width: 280,
    height: 210,
  },
  {
    src: '/photos/299591776_6034721229889491_7490303023852826121_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/299928779_6034721769889437_1560277384050446389_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/306322366_6118700068158273_8436880695430125643_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/306362637_6118699821491631_8294134628165044403_n.jpg',
    width: 280,
    height: 210,
  },
  {
    src: '/photos/306377730_6118699824824964_7004204427985494721_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/306395154_6118700454824901_7987506228573916577_n.jpg',
    width: 280,
    height: 210,
  },
  {
    src: '/photos/306553952_6118700048158275_1107323301711879906_n.jpg',
    width: 280,
    height: 210,
  },
  {
    src: '/photos/310981841_6221398194555126_2308731392526933468_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/310992329_6221398387888440_341396458929855557_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/311009679_6221398201221792_6820167662966140103_n.jpg',
    width: 210,
    height: 280,
  },
  {
    src: '/photos/313004593_6237957042899241_3707441999640147632_n.jpg',
    width: 228,
    height: 215,
  }
];

const Photos = () => {
  // This is a workaround to prevent SSR issues with react-photo-gallery
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient && <Gallery photos={photos} lazyLoad={true} />}</>;
};

export default Photos;
