// components/TicketsSection.tsx  (updated: GA + Tables only, real prices, buttons open new page)
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
        <h2 className={title({ size: "lg" })}>TICKETS</h2>
        <Divider className="my-10 max-w-md mx-auto" />
        <p className="text-white/80 text-lg mt-6 mb-16">
          Early bird tickets and table reservations — on sale soon.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* GA Ticket */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:border-primary/50 transition-all group">
            <CardBody className="py-16 px-12 text-center">
              <h3 className="text-5xl font-bold mb-8">GENERAL ADMISSION</h3>
              <div className="mb-12">
                <p className="text-4xl font-bold text-primary mb-2">
                  $2,500 MXN
                </p>
                <p className="text-xl text-white/70">
                  ~$150 USD
                </p>
              </div>
              <ul className="text-left text-white/90 space-y-3 mb-12 max-w-sm mx-auto">
                <li>• Full access to all stages and art zones</li>
                <li>• General entry & re-entry</li>
                <li>• Festival experience</li>
              </ul>
              <Button
                as={Link}
                href="https://tickets.celestyumfest.com/ga"  // Replace with real link when ready
                isExternal
                color="primary"
                size="lg"
                fullWidth
                className="text-lg py-8 font-medium"
                isDisabled  // Remove isDisabled when sales open
              >
                Coming Soon
              </Button>
            </CardBody>
          </Card>

          {/* Tables (VIP) */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:border-primary/50 transition-all group">
            <CardBody className="py-16 px-12 text-center">
              <h3 className="text-5xl font-bold mb-8">TABLES</h3>
              <div className="mb-12">
                <p className="text-4xl font-bold text-primary mb-2">
                  Starting at $5,000 USD
                </p>
                <p className="text-2xl text-white/70">
                  Up to $35,000 USD
                </p>
              </div>
              <ul className="text-left text-white/90 space-y-3 mb-12 max-w-sm mx-auto">
                <li>• Premium elevated viewing areas</li>
                <li>• Private table service</li>
                <li>• Dedicated entry & host</li>
                <li>• Bottle service included (tier dependent)</li>
                <li>• Best views of main stages</li>
              </ul>
              <Button
                as={Link}
                href="https://tickets.celestyumfest.com/tables"  // Replace with real link when ready
                isExternal
                color="primary"
                size="lg"
                fullWidth
                className="text-lg py-8 font-medium"
                isDisabled  // Remove isDisabled when sales open
              >
                Reserve Table — Coming Soon
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className="mt-20">
          <p className="text-white/60 text-xl">
            Ticket sales launch soon. Join the waitlist for early access.
          </p>
        </div>
      </div>
    </section>
  );
}