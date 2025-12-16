// components/ContactSection.tsx  (fixed: emails perfectly centered with flex)
"use client";

import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className={title({ size: "lg" })}>CONTACT</h2>
        <Divider className="my-10 max-w-md mx-auto" />

        <div className="mt-16">
          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
              <CardHeader className="text-center pb-10">
                <h3 className="text-4xl font-bold">Get in Touch</h3>
                <p className="text-white/70 mt-4 text-lg">
                  Send us a message and we'll reply as soon as possible
                </p>
              </CardHeader>
              <CardBody className="pt-0">
                <form className="space-y-8">
                  <Input
                    isRequired
                    type="text"
                    label="Name"
                    placeholder="Your full name"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="lg"
                  />
                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="lg"
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="What's this about?"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="lg"
                  />
                  <Textarea
                    isRequired
                    label="Message"
                    placeholder="Write your message here..."
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    minRows={8}
                    size="lg"
                  />
                  <Button type="submit" color="primary" size="lg" fullWidth className="py-10 text-xl font-medium">
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* 3 Contact Cards - emails perfectly centered */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-8 pt-10">
                <h3 className="text-xl font-bold text-center">General Inquiries</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-10">
                <Link href="mailto:info@celestyumfest.com" className="text-primary text-xl break-words text-center">
                  info@celestyumfest.com
                </Link>
              </CardBody>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-8 pt-10">
                <h3 className="text-xl font-bold text-center">Press & Media</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-10">
                <Link href="mailto:press@celestyumfest.com" className="text-primary text-xl break-words text-center">
                  press@celestyumfest.com
                </Link>
              </CardBody>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-8 pt-10">
                <h3 className="text-xl font-bold text-center">Sponsorships</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-10">
                <Link href="mailto:sponsors@celestyumfest.com" className="text-primary text-xl break-words text-center">
                  sponsors@celestyumfest.com
                </Link>
              </CardBody>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mt-24">
            <p className="text-white/60 text-2xl mb-10">Follow us on social media</p>
            <div className="flex justify-center gap-16">
              <Link isExternal href="https://instagram.com/celestyumfest" className="text-4xl text-white/80 hover:text-primary transition">
                Instagram
              </Link>
              <Link isExternal href="https://x.com/celestyumfest" className="text-4xl text-white/80 hover:text-primary transition">
                Twitter / X
              </Link>
              <Link isExternal href="https://tiktok.com/@celestyumfest" className="text-4xl text-white/80 hover:text-primary transition">
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}