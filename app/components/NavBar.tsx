import React from "react";
export default function NavBar({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-x-0 bg-red-600 top-0">
      <div>{title}</div>
      {children}
    </div>
  );
}
