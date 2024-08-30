import React from "react";
import { Card } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Search } from "lucide-react";
import Lottie from "lottie-react";

import { cn } from "../../lib/utils";
import NoConnction from "../../assets/no-internet.json";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface Props {}

const HelpCenterPage = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      //title: "You submitted the following values:",
      className: cn(
        "fixed inset-0 flex items-center justify-center pointer-events-none bg-transparent"
      ),
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950/80 backdrop-blur-sm p-1.5">
          <Lottie
            animationData={NoConnction}
            loop={true}
            className="w-[99%] mx-auto"
          />
        </div>
      ),
    });
  }

  return (
    <section className="">
      <div className="w-full p-3 flex justify-center items-center bg-muted">
        <Card className="p-3 w-[97%] py-5 max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Search..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mx-auto flex items-center gap-2">
                <Search size={18} /> Search
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default HelpCenterPage;
