import BackButton from "@/app/components/backButton";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:9999/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:9999/tickets/${id}`, {
    next: {
      revalidate: 60, // 60 seconds
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const id = params.id;

  // fetch
  const ticket = await getTicket(id);

  return (
    <main>
      <nav className="flex justify-between">
        <h2>Tickets Details</h2>
        <BackButton
          className={"text-white bg-primary rounded-md px-3 py-1 text-md"}
        >
          Back
        </BackButton>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
