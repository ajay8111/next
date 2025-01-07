import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const router = useRouter();
  const pathnames = router.asPath.split('/').filter((x) => x);

  return (
    <nav className="text-sm font-medium mb-4" aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {!isLast ? (
                <Link href={href} className="text-blue-500 hover:underline">
                  {value}
                </Link>
              ) : (
                <span className="text-gray-700">{value}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
