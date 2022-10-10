import { z } from "zod"

export const bodychecker = z.object({
  email: z.string().email({message: "พิมพ์ email ให้ถูก"}),
  pwd: z.string().min(6, {message: "Password must has at least 6 chars"}).max(12, {message: "Password must not exceed 12 chars"}),
  address: z.string().min(1, {message: "Please provide address"}),
  gender: z.enum(["male","female"],{errorMap: () => {return {message: "Please select gender"}},}),
  plan: z.enum(["full","half","mini"],{errorMap: () => {return {message: "Please select plan"}},}),
})