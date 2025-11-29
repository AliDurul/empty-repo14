import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { LuHeart, LuExpand } from "react-icons/lu";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PopProList({products}: {products: any[]}) {
    return (
        <Carousel
            className="w-full min-w-0 "
            opts={{ align: 'start', dragFree: true, loop: false }}
        >
            <CarouselContent className="">
                {products.map((product) => (
                    <CarouselItem key={product?.id} className="basis-auto transition-all pl-6">
                        <Card className="min-w-[260px] max-w-[280px] overflow-hidden py-0 gap-4">
                            <div className="relative overflow-hidden group">
                                {/* Discount badge */}
                                <Badge className="absolute left-3 top-3 z-10" variant="destructive">
                                    {`-${Math.round(((product.price - product.discountPrice) / product.price) * 100)}%`}
                                </Badge>
                                {/* Action icons */}
                                <div className="absolute right-3 -top-20 group-hover:top-3   transition-all duration-500 z-10 flex flex-col items-center gap-2">
                                    <Button variant={'ghost'} size={'sm'} className="rounded-full p-0 cursor-pointer bg-white hover:bg-primary/80! hover:text-primary-foreground">
                                        <LuExpand />
                                    </Button>
                                    <Button variant={'ghost'} size={'sm'} className="rounded-full p-0 cursor-pointer bg-white hover:bg-primary/80! hover:text-primary-foreground">
                                        <LuHeart />
                                    </Button>
                                    {/* <Button variant={'ghost'} size={'sm'} className="rounded-full p-0 cursor-pointer bg-white hover:bg-primary/80! hover:text-primary-foreground">
                                        <LuHeart />
                                    </Button> */}
                                </div>
                                {/* Primary image */}
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    width={480}
                                    height={224}
                                    className="h-52 w-full object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Hover image */}
                                <Image
                                    src={product.images[1]}
                                    alt={`${product.name} alternate`}
                                    width={480}
                                    height={224}
                                    className="absolute inset-0 h-52 w-full object-cover object-center opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <CardHeader className="px-4 pb-0">
                                <CardDescription className="text-muted-foreground">{product.brand}</CardDescription>
                                <CardTitle className="line-clamp-1 text-sm">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 pt-0">
                                {/* Rating */}
                                <div className="flex items-center gap-1 text-amber-400">
                                    {Array.from({ length: product.ratings }).map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" className="size-4" aria-hidden="true"><path fill="currentColor" d="m12 17.27l4.15 2.51q.675.41 1.413-.177t.547-1.423l-1.1-4.71l3.69-3.2q.725-.63.36-1.56t-1.32-.92l-4.85-.41l-1.89-4.31q-.38-.86-1.41-.86t-1.41.86L7.11 7.373l-4.85.41q-.95.08-1.316.923t.355 1.557l3.69 3.2l-1.1 4.71q-.2.95.538 1.535t1.423.065z" /></svg>
                                    ))}
                                </div>
                                {/* Prices */}
                                <div className="mt-2 flex items-baseline justify-between">
                                    <span className="text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                                    <span className="text-primary font-semibold">${product.discountPrice.toFixed(2)}</span>
                                </div>
                            </CardContent>
                            <CardFooter className="px-4 pb-4">
                                <Button variant={'primary-outline'} className="w-full hover:bg-primary/80 shadow-md shadow-primary/10 cursor-pointer">
                                    <span className="inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" className="size-4"><path fill="currentColor" d="M7 22q-.825 0-1.413-.587T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22Zm10 0q-.825 0-1.413-.587T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22ZM6.15 6l3.05 6h7.1l2.75-6H6.15Zm-1.6-2h15.5q.6 0 .912.488t.063.987l-3.85 8.4q-.25.55-.75.888T15.85 15H8.3l-1.1 2h11.8v2H7.1q-.725 0-1.113-.612T5.7 17.8l1.6-2.9L3 4H1V2h3q.375 0 .7.2t.45.55L6.5 6Z" /></svg>
                                        ADD TO CART
                                    </span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex left-5  hover:bg-primary! hover:text-primary-foreground! size-10 transition-all duration-300' />
            <CarouselNext className='hidden md:flex right-3  hover:bg-primary! hover:text-primary-foreground! size-10 transition-all duration-300' />
        </Carousel>

    )
}
