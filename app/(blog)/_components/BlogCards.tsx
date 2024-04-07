import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogCards = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <Card className='w-[400px] py-5'>
      <CardContent>
        <div className='w-[350px]'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt='Image'
              fill
              className='rounded-md object-cover'
            />
          </AspectRatio>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className='w-[100%] py-3 relative bg-opacity-100 bg-gradient-to-b from-transparent from-60%  to-secondary bg-blend-darken rounded-lg'>
          <CardDescription className='w-[300px] h-[200px] overflow-hidden z-[1]'>
            {content}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BlogCards;
