import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '../components/AppSidebar'
import Header from "@/components/Header"

export default function Ptw() {
    return (
  <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        {/* ヘッダーは上部に固定 */}
        <header className="w-full">
          <Header />
        </header>

        {/* メインレイアウト（Sidebar + メイン） */}
        <div className="flex flex-1 mt-2.5">
          {/* サイドバー（左） */}
          <AppSidebar />

          {/* コンテンツ（右） */}
          <main className="flex-1 p-6">
            {/* サイドバーのトリガーなど */}
            <SidebarTrigger />
            <div>
              {/* 他のメインコンテンツ */}
              ここにメインコンテンツが入ります。
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
    )
}