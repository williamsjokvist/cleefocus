"use client"

import Masonry from "react-layout-masonry";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { motion } from 'framer-motion'


export function Gallery(props: { images: string[] }) {
  return (
    <PhotoProvider>
      <Masonry columns={{ 480: 1, 640: 2, 1024: 3, 1280: 4 }} gap={8}>
        {props.images.map((img) => (
          <PhotoView key={img} src={img}>
            <motion.img
              src={img}
              className="w-full object-cover object-left-top cursor-pointer select-none gap-10 !m-0 !p-0"
              height="400"
              width="400"
              alt="thumbnail"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.325 }}
              viewport={{ once: false, amount: 0.25 }}
            />
          </PhotoView>
        ))}
      </Masonry>
    </PhotoProvider>
  )
}
