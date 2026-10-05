"use client";

import { useSyncExternalStore } from "react";
import { cleanDate } from "@/lib/dates";

const subscribe = () => () => {};

export default function LocalTimeRange({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const text = useSyncExternalStore(
    subscribe,
    () => cleanDate(start, end, false, true), // client: user's timezone
    () => null, // server + hydration: no value yet
  );

  return <span>{text ?? "\u00A0"}</span>; // or a skeleton, or a UTC fallback
}
