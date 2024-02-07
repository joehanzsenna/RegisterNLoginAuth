"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div>
      <ul className="flex w-[80%] m-auto justify-between">
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        {!session ? (
          <>
            <Link href="/login">
              <li>Login</li>
            </Link>
            <Link href="/register">
              <li>Register</li>
            </Link>
          </>
        ) : (
          <>
            {session.user?.email}
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className="py-2 px-5 mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
