"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    //FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const FormSchema = z.object({
    lName: z.string().min(1, { message: "入力必須です", })
        .max(25, { message: "25文字以内で入力してください" }),
    fName: z.string().min(1, { message: "入力必須です", })
        .max(25, { message: "25文字以内で入力してください" }),
    lNameKana: z.string().min(1, { message: "入力必須です", })
        .max(25, { message: "25文字以内で入力してください" }),
    fNameKana: z.string().min(1, { message: "入力必須です", })
        .max(25, { message: "25文字以内で入力してください" }),
    email: z.email({ message: "正しいメールアドレスを入力してください" }),
    password: z.string().min(8, { message: "パスワードは8文字以上で入力してください。" })
        .max(16, { message: "パスワードは16文字以内で入力してください。" })
        .regex(/[a-zA-Z]/, { message: "パスワードには英字を含めてください。" })
        .regex(/[0-9]/, { message: "パスワードには数字を含めてください。" })
        .regex(/[^a-zA-Z0-9]/, { message: "パスワードには記号を含めてください。" })
})

export default function Signup() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            lName: "",
            fName: "",
            lNameKana: "",
            fNameKana: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="lName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>姓</FormLabel>
                                <FormControl>
                                    <Input placeholder="高知" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>名</FormLabel>
                                <FormControl>
                                    <Input placeholder="太郎" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="lNameKana"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>セイ</FormLabel>
                                <FormControl>
                                    <Input placeholder="コウチ" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fNameKana"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>名</FormLabel>
                                <FormControl>
                                    <Input placeholder="タロウ" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>パスワード</FormLabel>
                            <FormControl>
                                <Input placeholder="1A@2B@3C@" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )

}