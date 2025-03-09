import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "quill-table-better/dist/quill-table-better.css";
import QuillResizeImage from 'quill-resize-image';
import QuillTableBetter from "quill-table-better";
import './TextEditor.less';

type Props = {
    routeName: string;
    editorValue: any
    setEditorValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    className?: string;
};
Quill.register("modules/resize", QuillResizeImage);
Quill.register({ "modules/table-better": QuillTableBetter }, true);

const QuillTextEditor: React.FC<Props> = ({
    routeName,
    editorValue,
    setEditorValue,
    placeholder,
    className,
}) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const quillInstance = useRef<Quill | null>(null);

    useEffect(() => {
        // Initialize Quill editor only once
        if (!quillInstance.current) {
            const Font = Quill.import("formats/font") as any;
            Font.whitelist = ["sans-serif", "serif", "monospace"];
            Quill.register(Font, true);

            const quill = new Quill(editorRef.current as HTMLElement, {
                theme: "snow",
                modules: {
                    toolbar: {
                        container: [
                            [{ header: [1, 2, false] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                            ["link", "image"],
                            ["clean"],
                            ["table-better"],
                        ],
                        handlers: {
                            image: () => fileInputRef.current?.click(),
                        },
                    },
                    resize: {
                        locale: {},
                    },
                    table: false,
                    "table-better": {
                        language: "en_US",
                        menus: [
                            "column",
                            "row",
                            "merge",
                            "table",
                            "cell",
                            "wrap",
                            "copy",
                            "delete",
                        ],
                        toolbarTable: true,
                    },
                    keyboard: {
                        bindings: QuillTableBetter.keyboardBindings,
                    },
                }
            });

            quillInstance.current = quill;

            // Add text-change event listener to handle editor content changes
            quill.on("text-change", () => {
                const editorContent = quill.root.innerHTML;
                // const editorContent = quill.getSemanticHTML();
                setEditorValue(editorContent);
            });

            quillInstance.current = quill;
        }

        // Only update the editor content if the value changes
        if (quillInstance.current && editorValue !== quillInstance.current.root.innerHTML) {
            quillInstance.current.root.innerHTML = editorValue;
        }

    }, [editorValue, setEditorValue]);

    // Handle image upload
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && quillInstance.current) {
            const formData = new FormData();
            formData.append("image", file);

            const apiUrl = `${import.meta.env.VITE_API_KEY}${routeName}`;
            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    body: formData,
                });
                const responseData = await response.json();

                if (responseData.imageUrls?.length) {
                    const range = quillInstance?.current?.getSelection();
                    quillInstance.current?.insertEmbed(range?.index || 0, "image", responseData.imageUrls[0]);
                }
            } catch (error) {
                console.error("Image upload failed:", error);
            }
        }
    };

    return (
        <div className="position-relative">
            <div className={`${className} description-container`} ref={editorRef}>{placeholder}</div>
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default QuillTextEditor;
