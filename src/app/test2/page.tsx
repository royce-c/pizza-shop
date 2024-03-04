import Link from "next/link"
import Label from "../components/ui/label"
import Input from "../components/ui/input"
import Textarea from "../components/ui/textarea"
import Button from "../components/ui/button";

export default function Component() {
  return (
    <>
      <div className="bg-gray-50 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_700px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Delicious Pizza</h1>
                <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Handcrafted pizzas made with the finest ingredients. Every slice is a delight.
                </p>
              </div>
              <div className="grid gap-1">
                <Link
                  className="inline-flex items-center font-medium text-gray-900 transition-colors hover:underline dark:text-gray-50 dark:hover:underline"
                  href="#"
                >
                  View Menu
                  <ChevronRightIcon className="w-4 h-4 ml-2 peer" />
                </Link>
              </div>
            </div>
            <img
              alt="Restaurant"
              className="mx-auto rounded-xl overflow-hidden object-cover object-center peer"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "700/400",
                objectFit: "cover",
              }}
              width="700"
            />
          </div>
        </div>
      </div>
      <section className="w-full py-12 lg:py-24" id="menu">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Menu</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our variety of pizzas. From classic choices to unique flavors, we have something for everyone.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Vegetarian</h3>
                <div className="grid gap-4 my-4">
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Margherita</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Classic cheese and tomato sauce.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$9.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Mediterranean</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Olives, feta cheese, and fresh veggies.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$11.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Garden Delight</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Colorful bell peppers, mushrooms, and onions.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$10.99</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Meat Lovers</h3>
                <div className="grid gap-4 my-4">
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Pepperoni Passion</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Double pepperoni for extra flavor.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$12.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Supreme Sausage</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Sausage, bacon, and ham.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$14.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">BBQ Bacon Bliss</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        BBQ sauce, bacon, and chicken.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$13.99</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Specialty Pizzas</h3>
                <div className="grid gap-4 my-4">
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Hawaiian Paradise</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Ham and pineapple for a tropical twist.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$11.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Truffle Lovers</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Truffle oil drizzle and gourmet mushrooms.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$15.99</div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Spicy Inferno</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Jalapenos and hot sausage for a fiery kick.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">$13.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:grid-cols-2xl-400px">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Special Offers</h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enjoy great savings with our special deals. Check back often for new offers!
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Monday Madness</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Start your week with a bang! Buy one large pizza, get the second at 50% off.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Family Feast</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Treat the family to a delicious dinner. 2 medium pizzas, 4 drinks, and a side of garlic bread for
                  $29.99.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Pizza & Wings Combo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Game night essential! Large pizza and 12 wings for $19.99.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:grid-cols-2xl-400px">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer Reviews</h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our customers have to say about our pizza.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <UserCircleIcon className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-gray-800" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <div className="flex items-center gap-1 text-sm peer-rtl:justify-end peer-rtl:text-right">
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-muted-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <span className="text-gray-500 dark:text-gray-400">4/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The pizza was delicious! I loved the combination of flavors in the veggie pizza. The crust was
                  perfectly crispy. Will definitely order again.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <UserCircleIcon className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-gray-800" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Mike Smith</h3>
                    <div className="flex items-center gap-1 text-sm peer-rtl:justify-end peer-rtl:text-right">
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-accent-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-muted-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <StarIcon className="w-4 h-4 fill-muted-warning peer group-hover:translate-y-0.5 transition-transform" />
                      <span className="text-gray-500 dark:text-gray-400">3/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The pizza was good, but I felt the toppings were a bit sparse. The delivery was quick, and the
                  customer service was excellent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:grid-cols-2xl-400px">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Have a question or want to place an order? Contact us and we'll be happy to help.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Opening Hours</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mon - Fri: 11:00 AM - 10:00 PM
                    <br />
                    Sat - Sun: 11:00 AM - 11:00 PM
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">Contact Information</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    123 Main Street
                    <br />
                    Springfield, CA 12345
                    <br />
                    <a href="#">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              <form className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="flex flex-col gap-1 sm:col-start-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UserCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}
