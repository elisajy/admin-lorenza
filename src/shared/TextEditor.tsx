import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill/dist/quill.snow.css";

type Props = {
    routeName: string;
    editorValue: any
    setEditorValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    className?: string;
};

const TextEditor: React.FC<Props> = ({
    routeName,
    editorValue,
    setEditorValue,
    placeholder,
    className,
}) => {
    const quillRef = useRef<ReactQuill | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Debounce function
    const debounce = (func: (...args: any[]) => void, wait: number) => {
        let timeout: ReturnType<typeof setTimeout>;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const debouncedSetEditorValue = useRef(
        debounce((value: string) => {
            setEditorValue(value);
        }, 300)
    );

    const handleChange = (content: string, delta: any, source: string) => {
        if (source === "user") {
            debouncedSetEditorValue.current(content);
        }
    };

    // Preserve selection after state update
    useEffect(() => {
        if (isUpdating && quillRef.current) {
            const editor = quillRef.current.getEditor();
            const currentSelection = editor.getSelection();
            if (currentSelection) {
                editor.setSelection(currentSelection);
            }
            setIsUpdating(false);
        }
    }, [editorValue]);

    // Handle image upload
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];
            if (file && quillRef.current) {
                const formData = new FormData();
                formData.append("image", file);

                const apiUrl = `${import.meta.env.VITE_API_KEY}${routeName}`;
                try {
                    const response = await fetch(apiUrl, {
                        method: "POST",
                        body: formData,
                    });
                    const responseData = await response.json();
                    const range = quillRef.current.getEditorSelection();

                    if (range && responseData.imageUrls?.length) {
                        quillRef.current
                            .getEditor()
                            .insertEmbed(range.index, "image", responseData.imageUrls[0]);
                    }
                } catch (error) {
                    console.error("Image upload failed:", error);
                }
            }
        };
    };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                ["link", "image"],
                ["clean"],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={editorValue}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            className={className}
        />
    );
};

export default TextEditor;
