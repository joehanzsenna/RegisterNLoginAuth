import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";


export default async function Dashboard() {
  const session = await getServerSession()
  if(!session){
    redirect("/")
  }
  return (
    <div className="w-full h-screen bg-red-900 text-3xl text-white">
      <h1>The dashboard page</h1>
    </div>
  );
}
