"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from '../assets/images/高知家.jpg';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"




const tripComponents: { title: string; to: string; description: string }[] = [
    {
        "title": "観光Vlog",
        "to": "/",
        "description": "高知県の観光情報をまとめたページです"
    },
    {
        "title": "グルメ",
        "to": "/",
        "description": "高知県でのグルメをまとめたページです"
    }
]

const jobComponents: { title: string; to: string; description: string }[] = [
    {
        "title": "アルバイト",
        "to": "/Ptw",
        "description": "高知県でのアルバイトをまとめたページです"
    },
    {
        "title": "正社員",
        "to": "/",
        "description": "高知県での仕事情報をまとめたページです"
    }
]
const newsComponents: { title: string; to: string; description: string }[] = [
    {
        "title": "イベント情報",
        "to": "/",
        "description": "高知県のイベント情報をまとめたページです"
    },
    {
        "title": "時事",
        "to": "/",
        "description": "高知県での時事情報をまとめたページです"
    }
]

export default function Header() {
    return (
        <div>
            <div
                className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm ">

                {/* 左側：ロゴとメニュー */}
                <div className="flex items-center gap-5 ">
                    <Link to='/' className="flex items-center gap-2">
                        <div className="w-20" >
                            <img className="max-w-full h-auto" src={Icon} />
                        </div>
                        <p className="whitespace-nowrap text-sm md:text-base">総合情報サイト</p>
                    </Link>
                    <div>
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>観光</NavigationMenuTrigger>
                                    <NavigationMenuContent className="min-w-[300px] w-auto">
                                        <ul className="grid w-full gap-2 md:grid-cols-2 px-4">
                                            {tripComponents.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.to}
                                                    className="whitespace-normal break-words"
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>仕事情報</NavigationMenuTrigger>
                                    <NavigationMenuContent className="min-w-[300px] w-auto">
                                        <ul className="grid w-full gap-2 md:grid-cols-2 px-4">
                                            {jobComponents.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.to}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>ニュース</NavigationMenuTrigger>
                                    <NavigationMenuContent　className="min-w-[300px] w-auto">
                                        <ul className="grid w-full gap-2 md:grid-cols-2 px-4">
                                            {newsComponents.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.to}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/Inquiry" >お問い合わせ</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    {/* 右側：問い合わせ＋アバター */}
                    <div className="ml-auto mr-24 flex items-center gap-3">
                        <Popover>
                            <PopoverTrigger>
                                <Avatar className="cursor-pointer hover:opacity-80 transition">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-48 p-3 ">
                                <div className="flex flex-col space-y-2">
                                    <Link to="/">
                                        <p>サインイン</p>
                                    </Link>
                                    <Link to="">
                                        <p>サインアップ</p>
                                    </Link>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

            </div>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-normal break-words">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}


