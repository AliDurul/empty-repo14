"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeaderCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const items = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661302819895-87ed85db1b59?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Winter Collection",
      imgClass: "object-top",
      title: "Winter Collection",
      subtitle: "Up to 40% off coats & knitwear",
      href: "/collections/winter",
      cta: "Shop Winter",
      variant: "default",
      position: "left-14 top-1/2 -translate-y-1/2",
      titleSize: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      subtitleSize: "text-base sm:text-lg md:text-xl",
      align: "text-left",
    },
    {
      src: "https://images.unsplash.com/photo-1581041122145-9f17c04cd153?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgClass: "object-center",
      alt: "New Arrivals",
      title: "New Arrivals",
      subtitle: "Fresh styles just dropped",
      href: "/new-arrivals",
      cta: "Explore New",
      variant: "secondary",
      position: "left-6 bottom-6",
      titleSize: "text-3xl sm:text-4xl md:text-5xl",
      subtitleSize: "text-sm sm:text-base md:text-lg",
      align: "text-left",
    },
    {
      src: "https://images.unsplash.com/photo-1707485122968-56916bd2c464?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgClass: "object-center",
      alt: "Electronics Sale",
      title: "Electronics Sale",
      subtitle: "Top brands at sharp prices",
      href: "/sale/electronics",
      cta: "Shop Deals",
      variant: "secondary",
      position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      titleSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
      subtitleSize: "text-base sm:text-lg md:text-xl",
      align: "text-center",
    },
    {
      src: "https://images.unsplash.com/photo-1699959560616-aa17ace76879?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Sports & Outdoor",
      title: "Sports & Outdoor",
      subtitle: "Gear up for your goals",
      href: "/sports",
      cta: "Get Gear",
      variant: "default",
      position: "right-6 top-6",
      titleSize: "text-3xl sm:text-4xl md:text-5xl",
      subtitleSize: "text-sm sm:text-base md:text-lg",
      align: "text-right",
    },
  ]

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden py-0">
                <CardContent className="relative h-48 sm:h-56 md:h-72 lg:h-80 xl:h-110 p-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={`object-cover ${item.imgClass} transform `}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  <div className={`absolute ${item.position} flex flex-col gap-3 text-white max-w-lg ${item.align}`}>
                    <h3 className={`${item.titleSize} font-bold tracking-tight drop-shadow-lg`}>
                      {item.title}
                    </h3>
                    <p className={`${item.subtitleSize} font-medium opacity-95 drop-shadow-md`}>
                      {item.subtitle}
                    </p>
                    <div>
                      <Link href={item.href}>
                        <Button variant={item.variant as "default" | "secondary" | "destructive" | "outline"} size="sm" className="mt-1 cursor-pointer shadow-lg">
                          {item.cta}
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden md:flex flex-col gap-4 justify-evenly">
        <Card className="overflow-hidden p-0 group">
          <CardContent className="relative h-50 p-0">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Promo 1"
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-sm font-semibold">Member Exclusive</p>
              <Link href="/member-deals">
                <Button size="sm" className="mt-2">Claim Deal</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden p-0 group">
          <CardContent className="relative h-50 p-0">
            <Image
              src="https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Promo 2"
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-sm font-semibold">Free Shipping</p>
              <Link href="/shipping">
                <Button variant="destructive" size="sm" className="mt-2 ">Learn More</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
