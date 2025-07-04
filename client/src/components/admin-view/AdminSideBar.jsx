import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  LayoutDashboard,
  ShoppingBasket,
  ChartNoAxesCombined,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItem = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

function MenuItem({ setOpen }) {
  const navaigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItem.map((menuItm) => (
        <div
          className="flex text-xl items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
          key={menuItm.id}
          onClick={() => {
            navaigate(menuItm.path);
            setOpen ? setOpen(false) : null;
          }}
        >
          {menuItm.icon}
          <span>{menuItm.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navaigate = useNavigate();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <span className="text-2xl font-extrabold">Admin panel</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItem setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navaigate("/admin/dashboard")}
          className="flex items-center cursor-pointer gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin panel</h1>
        </div>
        <MenuItem />
      </aside>
    </>
  );
}

export default AdminSideBar;
