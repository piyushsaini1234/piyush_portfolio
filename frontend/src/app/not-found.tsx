import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary mt-6">
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}
