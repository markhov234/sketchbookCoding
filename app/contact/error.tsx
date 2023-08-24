"use client";

export default function Error({ error, reset }: { error: Error; reset: any }) {
  return (
    <div>
      This ain&apos;t loading up : {error.message}
      <button onClick={() => reset()}></button>
    </div>
  );
}
