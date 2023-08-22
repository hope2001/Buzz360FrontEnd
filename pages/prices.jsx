import Link from "next/link";
import NavBar from "./components/partials/navbar";

function Pricing() {
    const plans = [
        {
          name: "Starter",
          price: 10,
          billed: "annually",
          features: [
            "Subscription with levels",
            "Advanced features included",
            "Shared workspaces & tools",
            "Premium versions functionality",
            "Customizing the outputs",
            "Priority customer support",
          ],
        },
        {
          name: "Medium",
          price: 59,
          billed: "annually",
          features: [
            "Subscription with levels",
            "Advanced features included",
            "Shared workspaces & tools",
            "Premium versions functionality",
            "Customizing the outputs",
            "Priority customer support",
          ],
        },
        {
          name: "Business",
          price: 289,
          billed: "annually",
          features: [
            "Subscription with levels",
            "Advanced features included",
            "Shared workspaces & tools",
            "Premium versions functionality",
            "Customizing the outputs",
            "Priority customer support",
          ],
        },
      ];
    return ( <>
    <NavBar/>
    <main>
    <section>
      <header>
        <h1>Pricing Table</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">Prix</Link></li>
        </ul>
      </header>
      <div>
        <h2>Our Pricing Plan</h2>
        <p>
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {plans?.map((plan) => (
            <div key={plan.name} className="pricing-item">
              <h3>{plan.name}</h3>
              <div className="flex items-center gap-3.5">
                <h2 className="font-bold text-custom-1">{plan.price}</h2>
                <p className="font-medium">
                  {plan.billed}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-5">
                    <img src="/images/pricing-icon-04.svg" alt="icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#">Get the plan</Link>
              <p className="text-sm text-center">
                No extra hidden charge
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
    </> );
}

export default Pricing;

