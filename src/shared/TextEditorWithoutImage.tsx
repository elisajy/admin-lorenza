import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillResizeImage from 'quill-resize-image';

type Props = {
    editorValue: any
    setEditorValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    className?: string;
};

const TextEditorWithoutImage: React.FC<Props> = ({
    editorValue,
    setEditorValue,
    placeholder,
    className,
}) => {
    const quillRef = useRef<ReactQuill | null>(null);

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                    ["link"],
                    ["clean"],
                ],
            },
        }
    }, []);

    const formats = useMemo(() => {
        return [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'ordered', 'indent',
            'link'
        ]
    }, []);

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={editorValue} onChange={setEditorValue}
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            className={className}
        />
    );
};

export default TextEditorWithoutImage;
