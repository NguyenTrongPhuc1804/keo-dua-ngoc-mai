"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t("fields.name.required")),
        email: z
          .string()
          .min(1, t("fields.email.required"))
          .email(t("fields.email.invalid")),
        message: z.string().min(1, t("fields.message.required")),
        phone: z.string().min(9, t("fields.phone.required")),
      }),
    [t]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error(t("submit.errorSend"));
      }

      toast.success(t("submit.success"));
      form.reset();
    } catch (error) {
      console.error("Client error:", error);
      toast.error(t("submit.error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-[#FFCB61]"
      style={{
        backgroundImage:
          "radial-gradient(circle 232px at 10% 20%, rgba(251,238,115,0.74) 0%, rgba(241,195,87,0.74) 90%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="w-24 h-1 bg-coconut-brown rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {t("formTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              {t("fields.name.label")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("fields.name.placeholder")}
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              {t("fields.phone.label")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("fields.phone.placeholder")}
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            {t("fields.email.label")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("fields.email.placeholder")}
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            {t("fields.message.label")}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              required
                              placeholder={t("fields.message.placeholder")}
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting
                      ? t("submit.submitting")
                      : t("submit.button")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {t("contactInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coconut-brown/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-coconut-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t("contactInfo.address.label")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("contactInfo.address.value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nature-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-nature-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t("contactInfo.phone.label")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("contactInfo.phone.value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t("contactInfo.email.label")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("contactInfo.email.value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coconut-light/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-coconut-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t("contactInfo.workingHours.label")}
                    </h4>
                    <p className="text-muted-foreground">
                      {t("contactInfo.workingHours.value")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {t("social.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-14 flex items-center gap-3"
                    onClick={() => {
                      window.open("tel:0939387070", "_blank");
                    }}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium">
                        {t("social.phone.label")}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t("social.phone.subtitle")}
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14 flex items-center gap-3"
                    onClick={() => {
                      window.open("https://zalo.me/0939387070", "_blank");
                    }}
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium">
                        {t("social.zalo.label")}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t("social.zalo.subtitle")}
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className=" relative border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-coconut-light/30 to-nature-green/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.420507408437!2d106.35166277508114!3d10.227628989889705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa8711332b453%3A0xe616e91a60e497e!2zNzMgxJAuIE5ndXnhu4VuIFbEg24gVMawLCBQaMaw4budbmcgNywgQuG6v24gVHJlLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1753257359578!5m2!1sen!2s"
                      width="600"
                      height="450"
                      loading="lazy"
                      allowFullScreen
                      title={t("map.title")}
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full rounded-lg absolute inset-0"
                    ></iframe>
                    <MapPin className="z-50 w-12 h-12 text-coconut-brown mx-auto mb-2" />
                    <p className="text-muted-foreground">{t("map.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("map.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
