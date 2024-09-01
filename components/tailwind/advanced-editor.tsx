"use client";
import { defaultEditorContent } from "@/lib/content";
import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  type JSONContent,
} from "novel";
import { ImageResizer, handleCommandNavigation } from "novel/extensions";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { defaultExtensions } from "./extensions";
import { ColorSelector } from "./selectors/color-selector";
import { LinkSelector } from "./selectors/link-selector";
import { NodeSelector } from "./selectors/node-selector";
import { MathSelector } from "./selectors/math-selector";
import { Separator } from "./ui/separator";

import { handleImageDrop, handleImagePaste } from "novel/plugins";
import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { uploadFn } from "./image-upload";
import { TextButtons } from "./selectors/text-buttons";
import { slashCommand, suggestionItems } from "./slash-command";

// import { fetchBlogBySlug } from "../../utils/helper"; // Adjust the path as needed
// import { editBlog } from "../../utils/helper"; // Adjust the path as needed

import axios from "axios";

const hljs = require("highlight.js");

const extensions = [...defaultExtensions, slashCommand];

interface TailwindAdvancedEditorProps {
  blog: any;
  editBlogData : any
}

const TailwindAdvancedEditor: React.FC<TailwindAdvancedEditorProps> = ({ blog, editBlogData}) => {
  const [initialContent, setInitialContent] = useState<JSONContent | null>(null);
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [charsCount, setCharsCount] = useState<number | undefined>();
  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);


  console.log(blog,"blog at advance editor")
  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     if (blogSlug) {
  //       try {
  //         const data = await fetchBlogBySlug(blogSlug);
  //         setInitialContent(data.content_json);
  //         setLoading(false);
  //       } catch (err) {
  //         console.error(err);
  //         setLoading(false);
  //       }
  //     }
  //   };

  //   fetchBlog();
  // }, [blogSlug]);

  useEffect(() => {
    setInitialContent(blog?.content_json);
  }, []);

  // Apply Codeblock Highlighting on the HTML from editor.getHTML()
  const highlightCodeblocks = (content: string) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    doc.querySelectorAll("pre code").forEach((el) => {
      // @ts-ignore
      hljs.highlightElement(el);
    });
    return new XMLSerializer().serializeToString(doc);
  };



  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON();
      setCharsCount(editor.storage.characterCount.words());

      // Save HTML content
      const contentHtml = highlightCodeblocks(editor.getHTML());
      const contentJson = json;
      const contentMarkdown = editor.storage.markdown.getMarkdown();

      try {
        await editBlogData(contentHtml, contentJson, contentMarkdown);
        setSaveStatus("Saved");
      } catch (error) {
        console.error(`Failed to save content:`, error);
        setSaveStatus("Failed to save");
      }
    },
    500
  );


  if (!initialContent) return null;

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="flex absolute right-5 top-5 z-10 mb-5 gap-2">
        <div className="rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">{saveStatus}</div>
        {charsCount && (
          <div className="rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">
            {charsCount} Words
          </div>
        )}
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="relative min-h-[500px] p-10 w-full max-w-screen-lg border-muted bg-blue-200 dark:bg-[#000617] sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) => handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: "prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full",
            },
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor);
            setSaveStatus("Unsaved");
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-blue-200 dark:bg-[#000617] px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm dark:hover:bg-[#1c273c] hover:bg-slate-400 aria-selected:bg-accent"
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <MathSelector />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
