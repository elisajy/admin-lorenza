// TextEditor.tsx
import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface OnChangeHandler {
    (e: any): void;
}

type Props = {
    value?: string;
    onChange?: OnChangeHandler;
    placeholder?: string;
    className?: any;
};

const TextEditor: React.FC<Props> = ({ value, onChange, placeholder, className }) => {
    const quillRef = useRef<ReactQuill>(null);

    // Custom handler for image upload
    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                try {
                    const response = await fetch('https://your-server.com/upload', {
                        method: 'POST',
                        body: formData,
                    });
                    const data = await response.json();

                    const quill = (window as any).quill; // Access quill instance
                    const range = quill.getSelection();
                    quill.insertEmbed(range.index, 'image', data.url); // Use the returned image URL
                } catch (error) {
                    console.error('Upload failed:', error);
                }
            }
        };
    };

    const modules = {
        toolbar: {
            container: [  // <--- Correct structure for Quill modules
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link"],
                // ["link", "image"], // Adding the 'image' option here
                ["clean"],
            ],
            // handlers: { // <--- Must be nested inside toolbar
            //     image: imageHandler,
            // }
        }
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
        "code",
    ];

    return (
        <>
            <ReactQuill
                theme="snow"
                value={value || ""}
                modules={modules}
                formats={formats}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </>
    );
};

export default TextEditor;