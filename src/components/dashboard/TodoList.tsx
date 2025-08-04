"use client";

import Image from "next/image";
import { TodoItem } from "@/types";

const todoItems: TodoItem[] = [
  {
    id: '1',
    title: 'Graphic Design Fundamentals',
    category: 'Course',
    time: '08:00 AM',
    iconType: 'book-open',
    iconBg: '#E2ECFF'
  },
  {
    id: '2',
    title: 'Logo Redesign Challenge',
    category: 'Challenge',
    time: '10:00 AM',
    iconType: 'color-swatch',
    iconBg: '#FFE2EF'
  },
  {
    id: '3',
    title: 'Apply 5 Jobs',
    category: 'Job',
    time: '12:00 AM',
    iconType: 'briefcase',
    iconBg: '#E1FFDE'
  }
];

function TodoItemCard({ item }: { item: TodoItem }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-[#EDEDED] rounded-2xl bg-white">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: item.iconBg }}
      >
        <Image
          src={`/icons/${item.iconType}.svg`}
          alt={item.category}
          width={20}
          height={20}
        />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm text-black">{item.title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="bg-[#F6F6F6] text-black text-xs px-2 py-1 rounded">
            {item.category}
          </span>
          <span className="text-xs text-[#676767]">{item.time}</span>
        </div>
      </div>
    </div>
  );
}

export default function TodoList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#1A1A1A]">To-Do</h2>
      <div className="space-y-3">
        {todoItems.map((item) => (
          <TodoItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
