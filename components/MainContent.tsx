import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HomeIcon, LeafIcon, LightbulbIcon, MapPinIcon } from "lucide-react";
export default function MainContent() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-50 dark:bg-purple-900">
      <header className="flex items-center h-16 px-4 border-b dark:border-purple-800">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <HomeIcon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          <span>Urban Living</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-purple-600 dark:text-purple-300" href="#">
            About
          </Link>
          <Link className="text-purple-600 dark:text-purple-300" href="#">
            Services
          </Link>
          <Link className="text-purple-600 dark:text-purple-300" href="#">
            Projects
          </Link>
          <Link className="text-purple-600 dark:text-purple-300" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-purple-800 dark:text-purple-200 sm:text-5xl xl:text-6xl/none">
                    Building Your Dream Apartments
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    We specialize in constructing sustainable, innovative, and
                    conveniently located apartments in urban areas.
                  </p>
                </div>
              </div>
              <Image
                src="/building.jpg"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width={550}
                height={310}
                alt="modern appartment building"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-purple-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm dark:bg-purple-700">
                  Our Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-purple-800 dark:text-purple-200 sm:text-5xl">
                  Why Choose Us
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are committed to delivering high-quality urban living
                  spaces that meet the needs of modern city dwellers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <LeafIcon className="h-12 w-12 text-purple-600 dark:text-purple-300 mx-auto" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">
                  Sustainable Practices
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We utilize eco-friendly construction practices to minimize our
                  environmental impact.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <LightbulbIcon className="h-12 w-12 text-purple-600 dark:text-purple-300 mx-auto" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">
                  Innovative Designs
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our apartments feature modern, innovative designs that
                  optimize space and comfort.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <MapPinIcon className="h-12 w-12 text-purple-600 dark:text-purple-300 mx-auto" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">
                  Convenient Locations
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our properties are located in the heart of the city, close to
                  amenities and transportation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm dark:bg-purple-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-purple-800 dark:text-purple-200 sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
                  Hear from our satisfied customers who have found their dream
                  homes with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “Urban Living built my dream apartment. The location is
                  perfect and the design is just amazing. I couldn't be
                  happier.“
                </blockquote>
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Client
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “I love my new apartment. The team at Urban Living was so
                  helpful and the whole process was smooth and easy.“
                </blockquote>
                <div>
                  <div className="font-semibold">Jane Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Client
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-purple-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-800 dark:text-purple-200 md:text-4xl/tight">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to find your dream apartment? Get in touch with us today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Your Name"
                  type="text"
                />
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Your Email"
                  type="email"
                />
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Subject"
                  type="text"
                />
                <Textarea
                  className="max-w-lg flex-1"
                  placeholder="Your Message"
                />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-purple-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Urban Living. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-purple-600 dark:text-purple-300"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-purple-600 dark:text-purple-300"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
