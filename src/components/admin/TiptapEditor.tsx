"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import {
  FiBold,
  FiItalic,
  FiCode,
  FiList,
  FiImage,
} from "react-icons/fi";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[300px] p-4",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content when prop changes (for mode switching)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL ảnh:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
        {/* Headings */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 1 })
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 2 })
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
            editor.isActive("heading", { level: 3 })
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          H3
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Text formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("bold")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Bold"
        >
          <FiBold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("italic")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Italic"
        >
          <FiItalic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("code")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Inline Code"
        >
          <FiCode className="w-4 h-4" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("bulletList")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Bullet List"
        >
          <FiList className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("orderedList")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Numbered List"
        >
          1.
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Code block */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("codeBlock")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Code Block"
        >
          {"</>"}
        </button>

        {/* Blockquote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("blockquote")
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="Blockquote"
        >
          &quot;
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Image */}
        <button
          type="button"
          onClick={addImage}
          className="px-3 py-1.5 rounded text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          title="Insert Image"
        >
          <FiImage className="w-4 h-4" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Horizontal rule */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-3 py-1.5 rounded text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          title="Horizontal Rule"
        >
          —
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}
