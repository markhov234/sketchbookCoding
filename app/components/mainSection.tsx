import React from "react";

export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // h-md
    <main className="shadow-lg rounded-md my-5 bg-custom-section-light">
      {children}
    </main>
  );
}
