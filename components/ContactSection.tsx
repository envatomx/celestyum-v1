// components/ContactSection.tsx  (updated: social media with react-icons icons instead of text)
"use client";

import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className={title({ size: "md" })}>CONTACT</h2>
        <Divider className="my-10 max-w-md mx-auto" />

        <div className="mt-16">
          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
              <CardHeader className="text-center pb-10">
                <h3 className="text-3xl font-bold">Get in Touch</h3>
              
              </CardHeader>
              <CardBody className="pt-0">
                <form className="space-y-6">
                  <Input
                    isRequired
                    type="text"
                    label="Name"
                    placeholder="Your full name"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="md"
                  />
                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="md"
                  />
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="What's this about?"
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    size="md"
                  />
                  <Textarea
                    isRequired
                    label="Message"
                    placeholder="Write your message here..."
                    variant="bordered"
                    classNames={{ inputWrapper: "bg-white/5" }}
                    minRows={6}
                    size="md"
                  />
                  <Button type="submit" color="primary" size="md" fullWidth className="py-6 text-base">
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* 3 Contact Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-4 pt-6">
                <h3 className="text-lg font-bold text-center">General Inquiries</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-6">
                <Link href="mailto:info@celestyumfest.com" className="text-primary text-base break-words text-center">
                  info@celestyumfest.com
                </Link>
              </CardBody>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-4 pt-6">
                <h3 className="text-lg font-bold text-center">Press & Media</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-6">
                <Link href="mailto:press@celestyumfest.com" className="text-primary text-base break-words text-center">
                  press@celestyumfest.com
                </Link>
              </CardBody>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-4 pt-6">
                <h3 className="text-lg font-bold text-center">Sponsorships</h3>
              </CardHeader>
              <CardBody className="flex justify-center items-center pt-0 pb-6">
                <Link href="mailto:sponsors@celestyumfest.com" className="text-primary text-base break-words text-center">
                  sponsors@celestyumfest.com
                </Link>
              </CardBody>
            </Card>
          </div>

          {/* Social Links - now with react-icons */}
          <div className="mt-20">
            <p className="text-white/60 text-lg mb-8">Follow us on social media</p>
            <div className="flex justify-center gap-12">
              <Link isExternal href="https://instagram.com/celestyumfest" className="text-white/80 hover:text-primary transition">
                <FaInstagram size={40} />
              </Link>
              <Link isExternal href="https://x.com/celestyumfest" className="text-white/80 hover:text-primary transition">
                <FaXTwitter size={40} />
              </Link>
              <Link isExternal href="https://tiktok.com/@celestyumfest" className="text-white/80 hover:text-primary transition">
                <FaTiktok size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}