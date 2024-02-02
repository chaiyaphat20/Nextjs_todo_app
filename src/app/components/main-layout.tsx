import React from "react";

type PropsType = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<PropsType>) {
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      {children}
    </div>
  );
}
