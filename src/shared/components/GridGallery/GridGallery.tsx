import Image from 'next/image';

import styles from './GridGallery.module.scss';

interface GridGalleryProps {
    images: Array<{ image: string; id: number | string }>;
}

const GridGallery = ({ images }: GridGalleryProps) => {
    return (
        <div className={styles.gridGellary}>
            {images.map(({ id, image }, index) => (
                <div key={id} className={index % 2 === 0 ? '' : styles.double}>
                    <Image src={image} alt={image} width={220} height={310} />
                </div>
            ))}
        </div>
    );
};

export default GridGallery;
