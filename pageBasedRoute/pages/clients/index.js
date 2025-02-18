import Link from "next/link";

export default function ClientsPage() {
  return (
    <div>
      This is client page
      <ul>
        <li>
          <Link href="clients/max">Max</Link>
        </li>
        <li>
          {/* alternative way of building link */}
          <Link
            href={{
              pathname: "clients/[id]",
              query: { id: "horse" },
            }}
          >
            Horse
          </Link>
        </li>
      </ul>
    </div>
  );
}
