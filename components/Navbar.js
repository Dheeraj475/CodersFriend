"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription
} from "@/components/ui/sheet";
import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        setProgress(20);
        setTimeout(() => setProgress(40), 100);
        setTimeout(() => setProgress(100), 400);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setProgress(0), 50);
    }, []);

    const closeSheet = () => setIsSheetOpen(false);

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color="#933ce6"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">
                    CodersFriend
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        About
                    </Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>
                    <div className="flex items-center">
                        <Button className="mx-1" variant="outline">
                            Login
                        </Button>
                        <Button className="mx-1" variant="outline">
                            Signup
                        </Button>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <button>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">CodersFriend</SheetTitle>
                                <SheetDescription>
                                    This is the navigation menu. Use the links below to navigate the site.
                                </SheetDescription>
                                <div className="flex flex-col gap-6">
                                    <Link href="/" onClick={closeSheet}>
                                        Home
                                    </Link>
                                    <Link href="/about" onClick={closeSheet}>
                                        About
                                    </Link>
                                    <Link href="/blog" onClick={closeSheet}>
                                        Blog
                                    </Link>
                                    <Link href="/contact" onClick={closeSheet}>
                                        Contact
                                    </Link>
                                    <div>
                                        <Button className="mx-1 text-xs" variant="outline" onClick={closeSheet}>
                                            Login
                                        </Button>
                                        <Button className="mx-1 text-xs" variant="outline" onClick={closeSheet}>
                                            Signup
                                        </Button>
                                    </div>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
