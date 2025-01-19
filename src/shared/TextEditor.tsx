import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface OnChangeHandler {
    (e: any): void;
}

type Props = {
    routeName: string;
    value?: string;
    onChange?: OnChangeHandler;
    placeholder?: string;
    className?: any;
};

const TextEditor: React.FC<Props> = ({
    routeName,
    value,
    onChange,
    placeholder,
    className,
}) => {
    const quillRef = useRef<ReactQuill | null>(null);

    // Ensure quillRef is ready to be used
    useEffect(() => {
        if (quillRef.current) {
            console.log('Quill editor is ready');
        }
    }, []); // Runs only once when the component is mounted

    // Custom handler for image upload
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append("image", file);

                const fileName = file.name;
                if (quillRef.current) {
                    await uploadFiles(formData, fileName, quillRef.current, routeName);
                }
            }
        };
    };

    // const uploadFiles = async (
    //     uploadFileObj: any,
    //     filename: string,
    //     quillObj: ReactQuill,
    //     routeName: string
    // ) => {
    //     const apiUrl = `${import.meta.env.VITE_API_KEY}${routeName}`;

    //     try {
    //         if (uploadFileObj !== undefined) {
    //             const response = await fetch(apiUrl, {
    //                 method: "POST",
    //                 body: uploadFileObj,
    //             });

    //             const responseData = await response.json();
    //             const range = quillObj.getEditorSelection();

    //             if (range && responseData && quillObj) {
    //                 quillObj
    //                     .getEditor()
    //                     .insertEmbed(range.index, "image", responseData.imageUrls[0]);
    //             }
    //         }
    //     } catch (error) {
    //         console.log("uploadFiles : " + error);
    //     }
    // };

    const uploadFiles = async (
        uploadFileObj: any,
        filename: string,
        quillObj: ReactQuill,
        routeName: string
    ) => {
        const apiUrl = `${import.meta.env.VITE_API_KEY}${routeName}`;

        try {
            if (uploadFileObj !== undefined) {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    body: uploadFileObj,
                });

                const responseData = await response.json();
                console.log('Response Data:', responseData); // Debugging the response

                const range = quillObj.getEditorSelection();
                if (range && responseData && responseData.imageUrls?.length > 0) {
                    const imageUrl = responseData.imageUrls[0];
                    console.log('Inserting image:', imageUrl); // Debugging image insertion

                    try {
                        quillObj.getEditor().insertEmbed(range.index, 'image', imageUrl);
                    } catch (error) {
                        console.error('Error inserting image:', error);
                    }
                } else {
                    console.error("No valid image URL or range");
                }
            }
        } catch (error) {
            console.log('uploadFiles : ' + error);
        }
    };


    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link", "image"], // Adding the 'image' option here
                ["clean"],
            ],
            handlers: {
                image: imageHandler,
            },
            clipboard: {
                matchVisual: false,
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
        "code",
    ];

    const test = () => {
        if (quillRef.current) {
            console.log(quillRef.current.getEditor());
            console.log(quillRef.current.getEditorContents());
        }
    };

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value || ""}
            modules={modules}
            formats={formats}
            onChange={test}
            placeholder={placeholder}
            className={className}
        />
    );
};

export default TextEditor;
