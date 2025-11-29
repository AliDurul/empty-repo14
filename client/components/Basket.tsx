"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { FiShoppingCart } from "react-icons/fi"
import { Badge } from "./ui/badge"


export function Basket() {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className='relative  '>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <FiShoppingCart size={22} className="text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Shopping Cart</p>
                        </TooltipContent>
                    </Tooltip>
                    <Badge className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                        8
                    </Badge>
                </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[360px] sm:w-[400px] p-0">
                <div className="w-full">
                    <SheetHeader className="p-6 border-b">
                        <SheetTitle>Cart Summary</SheetTitle>
                        <SheetDescription>Your selected items & quantity goals.</SheetDescription>
                    </SheetHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(-10)}
                                disabled={goal <= 200}
                            >
                                <Minus />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    {goal}
                                </div>
                                <div className="text-muted-foreground text-[0.70rem] uppercase">
                                    Calories/day
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(10)}
                                disabled={goal >= 400}
                            >
                                <Plus />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>
                        <div className="mt-3 h-[120px]">
                            <h1 className="text-sm font-medium">Basket placeholder</h1>
                        </div>
                    </div>
                    <SheetFooter className="p-4 border-t flex gap-2">
                        <Button className="flex-1">Checkout</Button>
                        <SheetClose asChild>
                            <Button variant="outline" className="flex-1">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    )
}
