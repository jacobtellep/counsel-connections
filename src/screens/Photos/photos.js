import { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Image from '@/components/Image';
import { Container } from './photos.styled';

const Photos = (props) => {
  // This is a workaround to prevent SSR issues with react-photo-gallery
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10); // Adjust to suit your needs

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = props.photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <>
      {isClient && <Gallery photos={currentPhotos} renderImage={imageRenderer} />}
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(props.photos.length / photosPerPage)}
      >
        Next
      </button>
    </>
  );
};

export default Photos;