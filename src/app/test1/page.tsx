import Link from "next/link"
import Button from "../components/ui/button";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 py-4">
        <div className="container flex items-center justify-between px-4">
          <Link className="flex items-center gap-2 text-gray-50" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="font-semibold">Pizza Time</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#"
            >
              Menu
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <button className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 grid items-center gap-4 text-center md:py-12 lg:py-24">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to Pizza Time</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The best pizza in town. Handcrafted with love.
            </p>
          </div>
        </div>
        <section className="py-12 bg-gray-50 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Pizzas</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Try our special selection of delicious pizzas.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Pizza"
                  className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Margherita</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Classic cheese and tomato base.</p>
                  <p className="text-xl font-bold">$9.99</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Pizza"
                  className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Pepperoni</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Classic cheese and tomato base with pepperoni.
                  </p>
                  <p className="text-xl font-bold">$11.99</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Pizza"
                  className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Supreme</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Classic cheese and tomato base with pepperoni, mushrooms, onions, and peppers.
                  </p>
                  <p className="text-xl font-bold">$14.99</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Pizza"
                  className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                  height="200"
                  src="/TheGreek.jpg"
                  width="200"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Vegetarian</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Classic cheese and tomato base with mushrooms, onions, and peppers.
                  </p>
                  <p className="text-xl font-bold">$12.99</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 border-t border-b">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm gap-4 items-start sm:max-w-2xl sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
              <div className="flex flex-col gap-2 p-4 border rounded-xl border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;Delicious pizza and great service. Highly recommended!&quot;
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex flex-col text-sm">
                    <strong>Emily Johnson</strong>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Verified Customer</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 border rounded-xl border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;The best pizza I&apos;ve ever had! I&apos;ll definitely be coming back for more.&quot;
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex flex-col text-sm">
                    <strong>Michael Thompson</strong>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Verified Customer</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 border rounded-xl border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;The pizza was amazing! The crust was perfectly crispy, and the toppings were fresh and flavorful.&quot;
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex flex-col text-sm">
                    <strong>Sophia Lee</strong>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 py-12 bg-gray-900 md:flex-row md:gap-4 md:py-8 lg:flex-row">
        <div className="container flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:gap-4 md:max-w-5xl md:mx-auto lg:gap-6">
          <Link className="flex items-center gap-2 text-2xl font-bold text-gray-50 md:text-3xl" href="#">
            Pizza Time
          </Link>
          <p className="text-sm text-gray-300 md:order-3 md:text-gray-400">© 2023 Pizza Time. All rights reserved.</p>
          <nav className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-2">
            <Link className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base" href="#">
              Home
            </Link>
            <Link className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base" href="#">
              Menu
            </Link>
            <Link className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
