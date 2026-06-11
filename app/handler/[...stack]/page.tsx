"use client"
import { HexclaveHandler } from "@hexclave/next"
import { hexclaveServerApp } from "@/stack/server"

export default function Handler(props: any){
    return (
        <HexclaveHandler fullPage app={hexclaveServerApp} {...props} />
    );
}