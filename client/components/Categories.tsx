"use client"

import * as React from "react"
import Link from "next/link"
import { Shirt, Gem, Smartphone, Dumbbell } from "lucide-react"
import { LuHouse } from "react-icons/lu";
import { useIsMobile } from "@/hooks/use-mobile"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const mensCategories = [
    { title: "T-Shirts & Polos", href: "/men/t-shirts", description: "Casual and formal t-shirts, polo shirts" },
    { title: "Shirts", href: "/men/shirts", description: "Dress shirts, casual shirts, denim shirts" },
    { title: "Jeans & Pants", href: "/men/jeans", description: "Slim fit, regular fit, cargo pants" },
    { title: "Jackets & Coats", href: "/men/jackets", description: "Leather jackets, bomber jackets, winter coats" },
    { title: "Suits & Blazers", href: "/men/suits", description: "Business suits, casual blazers" },
    { title: "Shoes", href: "/men/shoes", description: "Sneakers, formal shoes, boots, sandals" },
    { title: "Accessories", href: "/men/accessories", description: "Belts, wallets, ties, sunglasses" },
    { title: "Sportswear", href: "/men/sportswear", description: "Gym wear, running gear, athletic shoes" },
]

const womensCategories = [
    { title: "Dresses", href: "/women/dresses", description: "Casual dresses, evening gowns, summer dresses" },
    { title: "Tops & Blouses", href: "/women/tops", description: "T-shirts, tank tops, formal blouses" },
    { title: "Jeans & Pants", href: "/women/jeans", description: "Skinny jeans, wide leg pants, leggings" },
    { title: "Skirts", href: "/women/skirts", description: "Mini skirts, midi skirts, maxi skirts" },
    { title: "Jackets & Coats", href: "/women/jackets", description: "Blazers, trench coats, leather jackets" },
    { title: "Shoes & Heels", href: "/women/shoes", description: "Heels, flats, boots, sandals, sneakers" },
    { title: "Bags & Handbags", href: "/women/bags", description: "Shoulder bags, clutches, totes, backpacks" },
    { title: "Jewelry", href: "/women/jewelry", description: "Necklaces, earrings, bracelets, rings" },
]

const kidsCategories = [
    { title: "Boys Clothing", href: "/kids/boys", description: "T-shirts, jeans, jackets for boys (2-16 years)" },
    { title: "Girls Clothing", href: "/kids/girls", description: "Dresses, tops, pants for girls (2-16 years)" },
    { title: "Baby & Toddler", href: "/kids/baby", description: "Onesies, rompers, sleepwear (0-2 years)" },
    { title: "Kids Shoes", href: "/kids/shoes", description: "Sneakers, sandals, boots for all ages" },
    { title: "School Uniforms", href: "/kids/uniforms", description: "Shirts, pants, skirts, accessories" },
    { title: "Kids Accessories", href: "/kids/accessories", description: "Bags, hats, socks, belts" },
]

const electronicsCategories = [
    { title: "Smartphones", href: "/electronics/smartphones", description: "Latest smartphones from top brands" },
    { title: "Laptops & Computers", href: "/electronics/laptops", description: "Gaming laptops, business laptops, desktops" },
    { title: "Tablets & iPads", href: "/electronics/tablets", description: "Android tablets, iPads, accessories" },
    { title: "Audio & Headphones", href: "/electronics/audio", description: "Wireless earbuds, headphones, speakers" },
    { title: "Cameras", href: "/electronics/cameras", description: "DSLR, mirrorless, action cameras" },
    { title: "Smart Watches", href: "/electronics/smartwatches", description: "Fitness trackers, smartwatches" },
    { title: "Gaming", href: "/electronics/gaming", description: "Consoles, controllers, gaming accessories" },
    { title: "TV & Home Theater", href: "/electronics/tv", description: "Smart TVs, soundbars, projectors" },
]

const homeCategories = [
    { title: "Furniture", href: "/home/furniture", description: "Sofas, beds, tables, chairs, wardrobes" },
    { title: "Home Decor", href: "/home/decor", description: "Wall art, mirrors, vases, decorative items" },
    { title: "Bedding & Bath", href: "/home/bedding", description: "Sheets, towels, comforters, pillows" },
    { title: "Kitchen & Dining", href: "/home/kitchen", description: "Cookware, dinnerware, utensils, appliances" },
    { title: "Lighting", href: "/home/lighting", description: "Ceiling lights, lamps, outdoor lighting" },
    { title: "Storage & Organization", href: "/home/storage", description: "Shelves, baskets, closet organizers" },
    { title: "Garden & Outdoor", href: "/home/garden", description: "Patio furniture, planters, garden tools" },
]

const sportsCategories = [
    { title: "Gym & Fitness", href: "/sports/gym", description: "Weights, yoga mats, resistance bands" },
    // { title: "Running", href: "/sports/running", description: "Running shoes, activewear, fitness trackers" },
    { title: "Cycling", href: "/sports/cycling", description: "Bikes, helmets, cycling gear" },
    // { title: "Swimming", href: "/sports/swimming", description: "Swimwear, goggles, swim accessories" },
    // { title: "Team Sports", href: "/sports/team", description: "Football, basketball, cricket equipment" },
    { title: "Outdoor & Camping", href: "/sports/outdoor", description: "Tents, backpacks, hiking gear" },
]

export function Categories() {
    const isMobile = useIsMobile();

    return (
        <nav>
            <NavigationMenu className="max-w-full py-3" viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">

                    {/* Home */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/" className="flex items-center">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Men's Fashion */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">
                            <Shirt className="mr-2 h-4 w-4" />
                            Men
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {mensCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Women's Fashion */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">
                            <Gem className="mr-2 h-4 w-4" />
                            Women
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {womensCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Kids */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">Kids</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[550px]">
                                {kidsCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Electronics */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">
                            <Smartphone className="mr-2 h-4 w-4" />
                            Electronics
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {electronicsCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Home & Living */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">
                            <LuHouse className="mr-2 h-4 w-4" />
                            Home & Living
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {homeCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sports & Outdoors */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary transition-colors">
                            <Dumbbell className="mr-2 h-4 w-4" />
                            Sports
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[300px] ">
                                {sportsCategories.map((category) => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sale */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} >
                            <Link href="/sale" className="text-destructive font-semibold hover:text-destructive transition-colors">
                                Sale
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* New Arrivals */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/new-arrivals" className="hover:text-primary data-[state=open]:text-primary transition-colors">
                                New Arrivals
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
