import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

// @ts-ignore
export const { Link, redirect, usePathname, useRouter } =
createSharedPathnamesNavigation({locales, /* ... */});

//! When using i18n.ts, use this link instead of next/link to ensure proper routing.
