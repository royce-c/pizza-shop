import Link from "next/link";
import Label from "../components/ui/label";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";
import Button from "../components/ui/button";

export default function Component() {
  return (
    <>
      <header className="bg-[#1D1A1B] py-4">
        <div className="container flex items-center justify-between px-4">
          <Link className="flex items-center gap-2 text-gray-50" href="#">
            <PizzaIcon className="h-6 w-6" />
            <span className="font-semibold">Pizza 2001</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#menu"
            >
              Menu
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-100 transition-colors hover:text-gray-50"
              href="#contact"
            >
              Contact
            </Link>
            <div className="hidden md:flex flex-grow justify-center">
              <input
                type="text"
                placeholder="Search"
                className="py-1 px-2 w-24 md:w-32 rounded-md bg-gray-200 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </nav>
          <button className="md:hidden">
            {/* <MenuIcon className="w-6 h-6" /> */}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <div className="bg-gray-200 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_700px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pizza 2001
                </h1>
                <p className="max-w-[500px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Best Downtown Vancouver Pizza for over 25 Years!
                </p>
              </div>
              <div className="grid gap-1">
                {/* <Link
                  className="inline-flex items-center font-medium text-gray-900 transition-colors hover:underline dark:text-gray-50 dark:hover:underline"
                  href="#"
                >
                  View Menu
                  <ChevronRightIcon className="w-4 h-4 ml-2 peer" />
                </Link>
                <Link
                  className="inline-flex items-center font-medium text-gray-900 transition-colors hover:underline dark:text-gray-50 dark:hover:underline"
                  href="#"
                >
                  Order Online
                  <ChevronRightIcon className="w-4 h-4 ml-2 peer" />
                </Link> */}
              </div>
            </div>
            <img
              alt="Restaurant"
              className="mx-auto rounded-xl overflow-hidden object-cover object-center peer"
              height="400"
              src="/TheNewYorker.jpg"
              style={{
                aspectRatio: "700/400",
                objectFit: "cover",
              }}
              width="700"
            />
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Pizzas
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our dough is made fresh daily and topped to perfection then cooked
              on stone in our deck ovens. We only use premium ingredients on our
              pizzas.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Pizza"
                className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                height="200"
                src="/TheNewYorker.jpg"
                width="200"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">New Yorker</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Layered with mozzarella premium toppings and finished with
                  another layer of assorted cheeses
                </p>
                <p className="text-xl font-bold">$9.99</p>
              </div>
              <Button size="sm">Order Online</Button>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Pizza"
                className="rounded-lg object-cover aspect-[1/1] overflow-hidden"
                height="200"
                src="/Hawaiian.jpeg"
                width="200"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Hawaiian</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Every House Pizza starts with hand tossed dough topped with
                  our signature sauce and mozzarella
                </p>
                <p className="text-xl font-bold">$11.99</p>
              </div>
              <Button size="sm">Order Online</Button>
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
                <h3 className="text-xl font-bold">Supreme</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Classic cheese and tomato base with pepperoni, mushrooms,
                  onions, and peppers
                </p>
                <p className="text-xl font-bold">$14.99</p>
              </div>
              <Button size="sm">Order Online</Button>
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
                  Hand tossed dough our signature sauce and always topped
                  generously with mozzarella grated daily
                </p>
                <p className="text-xl font-bold">$12.99</p>
              </div>
              <Button size="sm">Order Online</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 lg:py-24" id="menu">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Full Menu
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our variety of pizzas. From classic choices to unique
                flavors, we have something for everyone.
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
                    <div className="self-start justify-self-end font-bold">
                      $9.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Mediterranean</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Olives, feta cheese, and fresh veggies.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $11.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Garden Delight</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Colorful bell peppers, mushrooms, and onions.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $10.99
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">House Pizzas</h3>
                <div className="grid gap-4 my-4">
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Pepperoni Passion</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Double pepperoni for extra flavor.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $12.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Supreme Sausage</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Sausage, bacon, and ham.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $14.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">BBQ Bacon Bliss</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        BBQ sauce, bacon, and chicken.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $13.99
                    </div>
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
                    <div className="self-start justify-self-end font-bold">
                      $11.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Truffle Lovers</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Truffle oil drizzle and gourmet mushrooms.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $15.99
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold">Spicy Inferno</h4>
                      <p className="text-sm text-gray-500 peer-rtl:justify-end peer-rtl:text-right dark:text-gray-400">
                        Jalapenos and hot sausage for a fiery kick.
                      </p>
                    </div>
                    <div className="self-start justify-self-end font-bold">
                      $13.99
                    </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Customer Reviews
              </h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What our customers say about our pizza.
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
                      <span className="text-gray-500 dark:text-gray-400">
                        4/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Came in for lunch once and now it is my favorite pizza place!
                  The customer service is great and the pizza is even better. I
                  highly recommend the New Yorker.
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
                      <span className="text-gray-500 dark:text-gray-400">
                        3/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I have been ordering from Pizza 2001 for years and they never
                  disappoint. The Hawaiian is my favorite and I order it every
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:grid-cols-2xl-400px">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Have a question or want to place an order? Contact us and we'll
                be happy to help.
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

      <footer className="flex flex-col gap-2 py-12 bg-[#1D1A1B] md:flex-row md:gap-4 md:py-8 lg:flex-row">
        <div className="container flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:gap-4 md:max-w-5xl md:mx-auto lg:gap-6">
          <Link
            className="flex items-center gap-2 text-2xl font-bold text-gray-50 md:text-3xl"
            href="#"
          >
            Pizza 2001
          </Link>
          <p className="text-sm text-gray-300 md:order-3 md:text-gray-400">
            © Pizza 2001
          </p>
          <nav className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-2">
            <Link
              className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base"
              href="#menu"
            >
              Menu
            </Link>
            <Link
              className="text-sm text-gray-300 transition-colors hover:text-gray-50 md:ml-4 md:text-base"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
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
  );
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
  );
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
  );
}

function PizzaIcon(props) {
  return (
    <svg
      {...props}
      fill="#ffffff"
      height="200px"
      width="200px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 224.512 224.512"
      xmlSpace="preserve"
      transform="rotate(-45)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <circle cx="89" cy="74.426" r="14.146"></circle>
          <path d="M112.256,126.77c-7.811,0-14.145,6.334-14.145,14.147c0,7.816,6.334,14.15,14.145,14.15c7.814,0,14.148-6.334,14.148-14.15 C126.404,133.104,120.07,126.77,112.256,126.77z"></path>
          <circle cx="133.563" cy="93.729" r="14.146"></circle>
          <path d="M195.287,16.574C168.741,5.576,140.776,0,112.169,0c-28.493,0-56.4,5.574-82.945,16.566 c-1.838,0.762-3.298,2.223-4.06,4.061c-0.761,1.838-0.761,3.904,0.001,5.742l11.992,28.932c0.001,0.004,0.005,0.008,0.007,0.012 l68.16,164.574c1.168,2.818,3.917,4.625,6.926,4.625c0.218,0,0.437-0.01,0.656-0.029c2.85-0.248,5.271-2.088,6.311-4.682 l68.143-164.49c0.002-0.004,0.004-0.006,0.006-0.01l11.98-28.928C200.93,22.545,199.113,18.158,195.287,16.574z M112.169,15 c24.133,0,47.778,4.264,70.397,12.688l-6.246,15.08c-20.618-7.598-42.157-11.445-64.138-11.445 c-21.896,0-43.382,3.848-63.982,11.443L41.946,27.68C64.554,19.262,88.141,15,112.169,15z M112.254,197.416L53.949,56.643 c18.766-6.846,38.317-10.32,58.232-10.32c20,0,39.605,3.477,58.389,10.324L112.254,197.416z"></path>
        </g>
      </g>
    </svg>
  );
}

function MenuIcon(props) {
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
  );
}
