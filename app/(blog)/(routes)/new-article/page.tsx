"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ImageUp, SendHorizontal } from "lucide-react";
import Link from "next/link";
import { UploadButton } from "@/lib/uploadthing";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters long",
  }),
  image: z.string(),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters long",
  }),
});

const createBlog = () => {
  const router = useRouter();
  const [imageurl, setimageUrl] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const resposne = await axios.post("api/blog/create", values);
      if (resposne.status === 200) {
        toast.success("Blog created successfully");
        router.push("/blog");
      }
    } catch (error) {
      console.log("[BLOG PAGE /new-article]", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='px-40 py-10 space-y-5'>
          <div className='w-[100%] flex items-center justify-center'>
            <Card className='w-[500px] h-[100px] space-y-3 flex items-center justify-center'>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='w-[100%] h-[100%] flex gap-3 items-center justify-center'>
                        <h2 className='text-lg'>Upload a cover image</h2>

                        <UploadButton
                          className='ut-button:bg-primary ut-label-disabled'
                          appearance={{
                            container: "flex flex-row",
                            allowedContent:
                              "flex h-10 rounded text-foreground flex-col items-center justify-center px-2 bg-secondary",
                          }}
                          endpoint='imageUploader'
                          onClientUploadComplete={(res) => {
                            console.log(res[0].url);
                            field.onChange(res[0].url);
                            setimageUrl(res[0].url);
                          }}
                          onUploadError={(error: Error) => {
                            alert(`ERROR! ${error.message}`);
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          </div>

          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Title'
                    className='focus:outline-0 focus:outline-transparent focus:ring-0 rounded border-0 text-3xl p-1'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {imageurl && (
            <div className='relative aspect-video mt-2'>
              <Image
                alt='Upload'
                fill
                className='object-cover rounded-md'
                src={imageurl}
              />
            </div>
          )}

          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Start writing....'
                    className='focus:outline-0 focus:outline-transparent focus:ring-0 rounded border-0 text-base p-1'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            size={"icon"}
            className='w-[60px] h-[60px] fixed top-[90%] left-[95%]'>
            <SendHorizontal strokeWidth={1} size={40} className='p-2' />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default createBlog;
