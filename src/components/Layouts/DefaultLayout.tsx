"use client";
import React, { useState, ReactNode } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <div className="relative flex flex-1 flex-col ">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-1xl p-4 md:p-6 1xl:p-10 relative -top-30 min-h-100">
              <div className="mx-auto max-w-screen-3xl pl-50 pr-50">
                <Breadcrumb pageName={"Company Setup"}/>
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
