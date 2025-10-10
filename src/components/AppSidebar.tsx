//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  //SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"

// Menu items.
const items = [
  {
    category: {
      title: "時給",
      ranges: [
        "~990",
        "991~1200",
        "1201~1400",
        "1401~",

      ]
    },
  },
  {
    category: {
      title: "勤務地",
      ranges: [
        "高知市内",
        "南国市内",
        "安芸市内",
        "四万十市内",
      ]
    },
  },
  {
    category: {
      title: "条件",
      ranges: [
        "未経験歓迎",
        "専門",
        "飲食",
        "営業",
      ]
    },
  }
]

export default function AppSidebar() {
  return (
    <Sidebar className="pt-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>検索条件</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {items.map((item, index) => (
                  <SidebarMenuItem key={item.category.title}>
                    <AccordionItem value={`items-${index}`}>
                      <AccordionTrigger>{item.category.title}</AccordionTrigger>
                      <AccordionContent>
                        {item.category.ranges.map((range, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`terms-${index}`} />
                            <Label htmlFor={`terms-${index}`}>{range}</Label>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </SidebarMenuItem>
                ))}
              </Accordion>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}