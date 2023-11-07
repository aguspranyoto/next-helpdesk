import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main className="">
      <nav className="flex justify-between items-center">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <div>
          <Link
            href={"/tickets/create"}
            className={"text-white bg-primary rounded-md px-3 py-1 text-md"}
          >
            Add new ticket
          </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
