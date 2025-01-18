// TextEditor.tsx
import React, { useRef } from "react";
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

const TextEditor: React.FC<Props> = ({ routeName, value, onChange, placeholder, className }) => {
    let quillRef = useRef<ReactQuill>(null);
    let reactQuillRef: ReactQuill | null;

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

                var fileName = file.name;
                // const res = await uploadFiles(file, fileName, reactQuillRef, routeName)
                // try {
                //     const response = await fetch('https://your-server.com/upload', {
                //         method: 'POST',
                //         body: formData,
                //     });
                //     const data = await response.json();

                //     const quill = (window as any).quill; // Access quill instance
                //     const range = quill.getSelection();
                //     quill.insertEmbed(range.index, 'image', data.url); // Use the returned image URL
                // } catch (error) {
                //     console.error('Upload failed:', error);
                // }
            }
        };
    };

    // const uploadFiles = (uploadFileObj: File, filename: string, quillObj: ReactQuill | null, routeName: string) => {
    //     //To Upload in root folder  
    //     var apiUrl = `${import.meta.env.VITE_API_KEY}/upload-commercial-thumbnail/${responseId}`;
    //     const digestCache: IDigestCache = this.props.context.serviceScope.consume(DigestCache.serviceKey);
    //     digestCache.fetchDigest(
    //         this.props.context.pageContext.web.serverRelativeUrl)
    //         .then(async (digest: string): Promise<void> => {
    //             try {
    //                 if (uploadFileObj != '') {
    //                     fetch(apiUrl, {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json;odata=verbose',
    //                             "X-RequestDigest": digest
    //                         },
    //                         body: uploadFileObj // This is your file object  
    //                     }).then((response) => {
    //                         console.log(response);
    //                         const range = quillObj.getEditorSelection();

    //                         var res = siteUrl + "/" + listName + "/" + filename;

    //                         quillObj.getEditor().insertEmbed(range.index, 'image', res);
    //                     }).catch((error) =>
    //                         console.log(error)
    //                     );
    //                 }
    //             }
    //             catch (error) {
    //                 console.log('uploadFiles : ' + error);
    //             }

    //         })
    // }

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
            handlers: { // <--- Must be nested inside toolbar
                image: imageHandler,
            },
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
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

    const test = () => {
        console.log(reactQuillRef?.getEditor());
        console.log(reactQuillRef?.getEditorContents());
    }

    return (
        <>
            <ReactQuill
                ref={(el) => {
                    reactQuillRef = el;
                }}
                theme="snow"
                value={value || ""}
                modules={modules}
                formats={formats}
                onChange={test}
                placeholder={placeholder}
                className={className}
            />
        </>
    );
};

export default TextEditor;