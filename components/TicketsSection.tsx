// components/TicketsSection.tsx  (updated: buttons active with real links)
"use client";

import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function TicketsSection() {
  return (
    <section id="tickets" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className={title({ size: "md" })}>TICKETS</h2>
        <Divider className="my-10 max-w-md mx-auto" />
        <p className="text-white/80 text-base mt-6 mb-16">
          Early bird tickets and table reservations — on sale soon.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:border-primary/50 transition-all group">
            <CardBody className="py-12 px-10 text-center">
              <h3 className="text-md font-bold mb-6">GENERAL ADMISSION</h3>
              <div className="mb-10">
                <p className="text-3xl font-bold text-primary mb-2">
                  $2,500 MXN
                </p>
                <p className="text-lg text-white/70">
                  ~$150 USD
                </p>
              </div>
              <ul className="text-left text-white/90 space-y-2 mb-10 max-w-sm mx-auto text-sm">
                <li>• Full access to all stages and art zones</li>
                <li>• General access</li>
                <li>• Festival experience</li>
              </ul>
              <Button
                as={Link}
                href="https://tickets.celestyum.com"
                isExternal
                color="primary"
                size="md"
                fullWidth
                className="text-base py-6"
              >
                Buy Now
              </Button>
            </CardBody>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:border-primary/50 transition-all group">
            <CardBody className="py-12 px-10 text-center">
              <h3 className="text-md font-bold mb-6">TABLES</h3>
              <div className="mb-10">
                <p className="text-3xl font-bold text-primary mb-2">
                  Starting at $5,000 USD
                </p>
                <p className="text-lg text-white/70">
                  Up to $35,000 USD
                </p>
              </div>
              <ul className="text-left text-white/90 space-y-2 mb-10 max-w-sm mx-auto text-sm">
                <li>• Premium backstage area</li>
                <li>• Private table service</li>
                <li>• Dedicated entry & host</li>
                <li>• Bottle service included (tier dependent)</li>
                <li>• Best views of main stages</li>
              </ul>
              <Button
                as={Link}
                href="https://tables.celestyum.com"
                isExternal
                color="primary"
                size="md"
                fullWidth
                className="text-base py-6"
              >
                Reserve Table
              </Button>
            </CardBody>
          </Card>
        </div>

        
      </div>
    </section>
  );
}