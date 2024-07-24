"use client";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="flex">
                <div className="relative flex flex-1 flex-col ">
                  <Header />
                  <main>
                    <div className="mx-auto max-w-screen-1xl p-4 md:p-6 1xl:p-10 relative -top-30 min-h-100">
                      <div className="mx-auto max-w-screen-3xl pl-50 pr-50">
                        <Breadcrumb pageName={"Company Setup"} />
                      </div>
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </>
          )}
        </div>
      </body>
    </html>
  );
}
