import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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
import { useEffect, useState } from "react"

import { useDispatch } from "react-redux";
import { type AppDispatch } from "../store/store"
import { addWorks, clearWorks } from "../store/workSlice";



//APIレスポンスの型定義
type range = {
  id: string,
  value: string
};

type category = {
  title: string,
  ranges: range[]
};

type responseItem = {
  category: category
};

// メイン処理
export default function AppSidebar() {

  const dispatch = useDispatch<AppDispatch>();
  const [items, setItems] = useState<responseItem[]>([]);
  //APIの呼び出し
  useEffect(() => {
    dispatch(clearWorks());
    const getData = async () => {
      try {
        const res = await fetch('https://68f1a3e9b36f9750dee9d1dd.mockapi.io/getPtw');
        const json = await res.json();
        console.log(json);

        // 正しいフィールドから配列を取得
        setItems(json || []);
      } catch (err) {
        console.error("APIの取得に失敗しました", err);
      }

    }
    getData();
  }, [])


  // 状態管理
  const [selectedValues, setSelectedValues] = useState<{
    [category: string]: { id: string; value: string }[];
  }>({
    時給: [],
    勤務地: [],
    条件: []
  });

  //チェックボックスの状態変更処理
  const handleCheckboxChange = (
    category: string,
    range: { id: string; value: string },
    checked: boolean
  ) => {
    setSelectedValues((prev) => {
      const current = prev[category] || [];
      const updated = checked
        ? [...current, range]
        : current.filter((v) => v.id !== range.id);
      return { ...prev, [category]: updated };
    });
  };

  //検索ボタン押下時のアクション
  const search = () => {
    const wages = selectedValues["時給"]?.map((v) => v.value) || [];
    const places = selectedValues["勤務地"]?.map((v) => v.value) || [];
    const conditions = selectedValues["条件"]?.map((v) => v.value) || [];

    const getData = async () => {
      try{
        const res = await fetch('https://68f1a3e9b36f9750dee9d1dd.mockapi.io/getWork')
        const json = await res.json();

        dispatch(addWorks(json));

      }catch (error){
        console.log("error")
      }
    }
    
    getData()
    alert(`時給: ${wages.join(", ")}\n勤務地: ${places.join(", ")}\n条件: ${conditions.join(", ")}`);
  };

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
                  const selected = selectedValues[title] || [];

                  return (
                    <SidebarMenuItem key={title}>
                      <AccordionItem value={`items-${index}`}>
                        <AccordionTrigger>{title}</AccordionTrigger>
                        <AccordionContent>
                          {item.category.ranges.map((range, i) => {
                            const id = `${title}-${i}`;
                            const isChecked = selected.some((v) => v.id === range.id);

                            return (
                              <div key={id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={id}
                                  checked={isChecked}
                                  onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(title, range, !!checked)
                                  }
                                />
                                <Label htmlFor={id}>{range.value}</Label>
                              </div>
                            );
                          })}
                        </AccordionContent>
                      </AccordionItem>
                    </SidebarMenuItem>
                  );
                })}
              </Accordion>

              <div className="flex flex-wrap items-center gap-2 md:flex-row mt-4">
                <Button variant="outline" onClick={search}>
                  検索
                </Button>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
