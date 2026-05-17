import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-80 px-6 py-8 md:px-10">
        {children}
      </main>
    </div>
  );
}