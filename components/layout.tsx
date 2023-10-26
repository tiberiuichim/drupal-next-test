import { Roboto } from "next/font/google";
import Link from "next/link";

import { Breadcrumb } from "antd";
import { ConfigProvider } from "antd";
import { PreviewAlert } from "components/preview-alert";

import colors from "colors";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function Layout({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            borderRadius: 0,
            fontFamily: roboto.style.fontFamily,
            colorPrimary: colors["violet-light"],
          },
        }}
      >
        <PreviewAlert />
        <div className="max-w-screen-md px-6 mx-auto">
          <header>
            <div className="container flex items-center justify-between py-6 mx-auto">
              <Breadcrumb items={[{ title: "Home", href: "/" }]} />
              <Link href="/" className="text-2xl font-semibold no-underline">
                Next.js for Drupal
              </Link>
              <Link
                href="https://next-drupal.org/docs"
                target="_blank"
                rel="external"
                className="hover:text-blue-600"
              >
                Read the docs
              </Link>
            </div>
          </header>
          <main className="container py-10 mx-auto">{children}</main>
        </div>
      </ConfigProvider>
    </>
  );
}
