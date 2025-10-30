import { ClipboardTextIcon, ListChecksIcon } from "@phosphor-icons/react";


export const navLinks = [
  {
    id: 1,
    label: "Pedidos",
    path: "/admin/pedidos",
    icon: <ClipboardTextIcon size={22} />,
  },
  {
    id: 2,
    label: "Produtos",
    icon: <ListChecksIcon size={22} />,
    sublinks: [
      {
        id: "2-1",
        label: "Listar produtos",
        path: "/admin/produtos",
      },
      {
        id: "2-2",
        label: "Cadastrar produto",
        path: "/admin/novo-produto",
      },
    ],
  },
];
