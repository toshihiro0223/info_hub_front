//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
//ライブラリー
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
import { Button } from "./ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { useState } from "react"

//メニューのアイテム
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

//メイン処理
export default function AppSidebar() {
  
  //状態管理
  const [selectedWages, setSelectedWages] = useState<string[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  /**
   * 
   * @param category 
   * @param value 
   * @param checked 
   * @description 
   */
  const handleCheckboxChange = (
    category: string,
    value: string,
    checked: boolean
  ) => {
    const updateSelected = (prev: string[]) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value);

    switch (category) {
      case "時給":
        setSelectedWages(updateSelected);
        break;
      case "勤務地":
        setSelectedPlaces(updateSelected);
        break;
      case "条件":
        setSelectedConditions(updateSelected);
        break;
    }
  };
  
  const search = (wages: string[], place: string[], condition: string[]) => {
      alert(`${wages},${place},${condition}`)
    }
  
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
                {items.map((item, index) => {
                  const title = item.category.title;
                  const selectedValues =
                    title === "時給"
                      ? selectedWages
                      : title === "勤務地"
                      ? selectedPlaces
                      : selectedConditions;

                  return (
                    <SidebarMenuItem key={title}>
                      <AccordionItem value={`items-${index}`}>
                        <AccordionTrigger>{title}</AccordionTrigger>
                        <AccordionContent>
                          {item.category.ranges.map((range, i) => {
                            const id = `${title}-${i}`;
                            const isChecked = selectedValues.includes(range);

                            return (
                              <div key={id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={id}
                                  checked={isChecked}
                                  onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(title, range, checked)
                                  }
                                />
                                <Label htmlFor={id}>{range}</Label>
                              </div>
                            );
                          })}
                        </AccordionContent>
                      </AccordionItem>
                    </SidebarMenuItem>
                  );
                })}
              </Accordion>
              <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button 
                  variant="outline"
                  onClick={() =>
                    search(selectedWages, selectedPlaces, selectedConditions)
                  }
                >検索</Button>
              </div>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}