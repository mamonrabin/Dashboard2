/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";

type Props = {
  value?: string;
  onChange?: (content: string) => void;
};

export default function TiptapEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
    ],

    content: value || "",

    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange?.(html); // ✅ controlled output
    },

    editorProps: {
      attributes: {
        class:
          "prose prose-sm md:max-w-none w-full focus:outline-none min-h-[120px] px-3 py-2",
      },
    },

    immediatelyRender: false,
  });

  if (!editor) return null;

  const btn = (active: boolean) =>
    `px-2 py-1 rounded ${
      active ? "bg-gray-300" : "hover:bg-gray-200"
    }`;

  return (
    <div className="border rounded bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-50">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={btn(editor.isActive("paragraph"))}
        >
          Normal
        </button>

        {[1, 2, 3].map((level) => (
          <button
            key={level}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: level as any })
                .run()
            }
            className={btn(editor.isActive("heading", { level }))}
          >
            H{level}
          </button>
        ))}

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(editor.isActive("bold"))}
        >
          <FaBold />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(editor.isActive("italic"))}
        >
          <FaItalic />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btn(editor.isActive("underline"))}
        >
          <FaUnderline />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btn(editor.isActive("bulletList"))}
        >
          <FaListUl />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={btn(editor.isActive("orderedList"))}
        >
          <FaListOl />
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="p-2" />
    </div>
  );
}
