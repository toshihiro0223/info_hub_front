"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
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
        "to": "/",
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
                            <p>高知県の総合情報サイト</p>
                        </Link>
                        <div>
                            <NavigationMenu viewport={false}>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>観光</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {tripComponents.map((component) => (
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
                                        <NavigationMenuTrigger>仕事情報</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                                            <Link to="/docs">お問い合わせ</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        {/* 右側：問い合わせ＋アバター */}
                        <div className="ml-auto mr-24 flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
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
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}



