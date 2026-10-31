import Link from "next/link";
export default function NotFound() {
  return <main className="max_width py-20 text-center"><h1 className="font-aboreto text-primary text-4xl mb-6">Page Not Found</h1><p className="text-light mb-8">Explore our villas, wellness experiences and stories, or contact our team for help.</p><Link href="/" className="text-primary border-b border-secondary">Return to Soul Storries</Link></main>;
}
