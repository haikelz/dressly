import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dressly",
  description:
    "Introducing our latest fashion landing website design! This captivating design includes a stunning hero section with an eye-catching image, a partner section featuring prestigious brands, a carefully curated top selection section, a showcase of our best-selling items, an easy-to-follow 'How to Order' section, and a newsletter sign-up to stay updated with the latest trends and exclusive offers.",
  "og:image": "/og.png",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
