'use client';
import React from 'react'
import { Button } from './ui/button'

export default function Newsletter() {
    return (
        <section aria-labelledby="newsletter-title" className="relative overflow-hidden rounded-2xl max-w-5/6 mx-auto">
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary/90 blur-xl" />
                <div className="absolute inset-0 bg-linear-to-r from-secondary/15 via-secondary/35 to-primary/25" />
                {/* subtle svg pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative bg-background/70 border border-primary/20 p-10 md:p-14 shadow-sm shadow-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h2 id="newsletter-title" className="text-2xl md:text-3xl font-bold tracking-tight">
                            Join the ShopLy newsletter
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-prose">
                            Get exclusive offers, early access to drops, and curated picks straight to your inbox.
                        </p>
                    </div>
                    <form
                        aria-label="Newsletter subscription"
                        className="flex w-full md:w-auto items-center gap-3"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="flex-1 md:w-96 h-12 rounded-md border border-neutral-300 bg-white px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        />
                        <Button type="submit" variant="secondary" className="h-12 px-6">Subscribe</Button>
                    </form>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-4">By subscribing, you agree to receive marketing emails from ShopLy. You can unsubscribe at any time.</p>
            </div>
        </section>
    )
}
