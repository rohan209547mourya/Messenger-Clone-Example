'use client'


import Modal from '@/app/components/Modal';
import Image from 'next/image';


interface ImageModalProps {
    src: string;
    isOpen?: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    src, 
    isOpen,
    onClose
}) => {


    if(!isOpen) return null;

    return (
       <Modal isOpen={isOpen}  onClose={onClose}>
            <div className="max-w-full">
                <Image 
                    className='rounded-md  object-contain w-full h-full'
                    src={src}
                    alt='image'
                    width={500}
                    height={500}
                />
            </div>
       </Modal>
    )
}

export default ImageModal