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
        { id: "1", value: "~990" },
        { id: "2", value: "991~1200" },
        { id: "3", value: "1201~1400" },
        { id: "4", value: "1401~" },

      ]
    },
  },
  {
    category: {
      title: "勤務地",
      ranges: [
        { id: "1", value: "高知市内" },
        { id: "2", value: "南国市内" },
        { id: "3", value: "四万十市内" },
      ]
    },
  },
  {
    category: {
      title: "条件",
      ranges: [
        { id: "1", value: "日払い" },
        { id: "2", value: "短期" },
        { id: "3", value: "週一からOK" },
        { id: "4", value: "髪色自由" }
      ]
    },
  }
]

//メイン処理
export default function AppSidebar() {

  //状態管理
  const [selectedWages, setSelectedWages] = useState<{ id: string, value: string }[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<{ id: string, value: string }[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<{ id: string, value: string }[]>([]);

  /**
   * 
   * @param category 
   * @param value 
   * @param checked 
   * @description チェックボックスの状態管理関数
   */
  const handleCheckboxChange = (
    category: string,
    range: { id: string, value: string },
    checked: boolean
  ) => {
    const updateSelected = (
      prev: { id: string; value: string }[],
      range: { id: string; value: string },
      checked: boolean
    ) =>
      checked ? [...prev, range] : prev.filter((v) => v.id !== range.id)


    switch (category) {
      case "時給":
        setSelectedWages((prev) => updateSelected(prev, range, checked))
        break;
      case "勤務地":
        setSelectedPlaces((prev) => updateSelected(prev, range, checked));
        break;
      case "条件":
        setSelectedConditions((prev) => updateSelected(prev, range, checked));
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
                            const isChecked = selectedValues.some((v) => v.id === range.id)

                            return (
                              <div key={id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={id}
                                  checked={isChecked}
                                  onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(title, range, !!checked)
                                  }
                                />
                                <Label htmlFor={`${title}-${range.id}`}>{range.value}</Label>
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
                  onClick={() => search(
                    selectedWages.map((v) => v.value),
                    selectedPlaces.map((v) => v.value),
                    selectedConditions.map((v) => v.value)
                  )}
                >検索</Button>
              </div>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}