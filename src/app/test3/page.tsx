

export default function Page() {
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
}