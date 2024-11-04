import dynamic from 'next/dynamic';

const images = [
  "https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0016-768x576.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455133922_17899168722024060_8839432986105902310_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/454762286_17898929322024060_9149285269556426652_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455127181_17898928254024060_80517522873973738_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455008987_17898758820024060_8513801479627212184_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453884147_17897889351024060_56629886484733445_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453730774_17897730876024060_1602622808588332470_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453406819_17897310750024060_5817124933973139293_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/452634944_17896589940024060_7603900188691136917_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451866785_17896066923024060_2940186720769365153_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451338101_17895606690024060_9136278885865093279_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451450247_17895606390024060_8534976270100613003_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/450586784_17895179637024060_2053923880400701924_nfull.jpg",
  "https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0014-768x576.jpg",
  "https://cleefocus.com/wp-content/uploads/2023/10/IMG-20231011-WA0001-768x768.jpg"
];

const Gallery = dynamic(() => import('../../components/gallery').then(mod => mod.Gallery), { ssr: false })

export default function Album() {
  return (
    <main className="pt-[106px] bg-sgray">
      <Gallery images={images} />
    </main>
  );
}
