"use client";

import Link from "next/link";
import { SignupForm as Form } from "@repo/ui/src";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const router = useRouter();
    const onSignup = async () => {
        await fetch("/api/signup", { method: "POST" });
        router.push("/");
    }
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1>Signup</h1>
            <Form onSubmit={onSignup}/>
            or
            <Link href="/login">login</Link>
        </div>
    )
}