"use client";
import { Input } from "@repo/ui/Input";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <div
        style={{
          height: "350px",
          width: "280px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          padding: 3,
          gap: 5,
        }}
      >
        <Input
          placeholder="messsage"
          onChange={() => {
            route.push("chat/123");
          }}
        />
        <button
          style={{
            height: "24px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
