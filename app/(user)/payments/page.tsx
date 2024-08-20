import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import ManageSubscription from "./ManageSubscription";

const page = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  });

  const plan = subscription && subscription.subscribed ? "Premium" : "Free";

  return (
    <div className="border rounded-md p-4">
      <h1 className="text-4xl mb-3">Subscription details</h1>
      <p className="text-lg mb-2">Your current plan is {plan}</p>
      <ManageSubscription />
    </div>
  );
};

export default page;
