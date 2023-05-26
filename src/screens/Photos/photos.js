import { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Image from '@/components/Image';
import { Container } from './photos.styled';

const Photos = (props) => {
  // This is a workaround to prevent SSR issues with react-photo-gallery
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imageRenderer = ({ index, left, top, key, photo }) => (
    <Container key={key} left={left} top={top} width={photo.width} height={photo.height}>
      <Image
        blurDataURL={`${photo.src}?w=10&h=10`}
        index={index}
        photo={photo}
        src={photo.src}
        alt={`Photo ${index}`}
        width={photo.width}
        height={photo.height}
        layout='responsive'
      />
    </Container>
  );

  return <>{isClient && <Gallery photos={props.photos} renderImage={imageRenderer} />}</>;
};

export default Photos;
