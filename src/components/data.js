import { AiOutlineStar } from "react-icons/ai";
import image1 from "../images/image-1.avif";
import image2 from "../images/image-2.avif";
import image3 from "../images/image-3.avif";
import image4 from "../images/image-4.avif";

const blogs = [
  {
    id: 1,
    title: "My first blog post",
    icons: AiOutlineStar,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestias voluptate mollitia officia beatae veniam optio aperiam! Vitae incidunt enim quod ad, perferendis aperiam iusto maiores earum quos obcaecati sunt.
    Obcaecati, unde in harum sit fuga eos odio neque .`,
    img: image1,
    isFavorite: false,
  },
  {
    id: 2,
    title: "my second blog post",
    icons: AiOutlineStar,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestias voluptate mollitia officia beatae veniam optio aperiam! Vitae incidunt enim quod ad, perferendis aperiam iusto maiores earum quos obcaecati sunt.
    Obcaecati, unde in harum sit fuga eos odio n.`,
    img: image2,
    isFavorite: false,
  },
  {
    id: 3,
    title: "My third blog post",
    icons: AiOutlineStar,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam eos delectus necessitatibus? Minima, aliquam, officia incidunt inventore veritatis obcaecati harum, rerum ab asperiores iste totam corporis alias accusantium eligendi.
    Eaque porro velit cumque reprehenderit. `,
    img: image3,
    isFavorite: true,
  },
  {
    id: 4,
    title: "my fourth blog post",
    icons: AiOutlineStar,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestias voluptate mollitia officia beatae veniam optio aperiam! Vitae incidunt enim quod ad, perferendis aperiam iusto maiores earum quos obcaecati sunt.
    Obcaecati, unde in harum sit .`,
    img: image4,
    isFavorite: true,
  },
];

export default blogs;
