import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:9999/tickets", {
    next: {
      revalidate: 0, //0 seconds
    },
  });
  return res.json();
}

export default async function TicketList() {
  // fetch
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
