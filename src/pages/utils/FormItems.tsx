import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Select, DatePicker, InputNumber, Upload, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
const { RangePicker } = DatePicker;

export const getInputFormItem = (
    label: string,
    name: string,
    placeholder: string,
    className?: string,
    readOnly?: boolean,
    disabled?: boolean,
    rules?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item className={className ?? ''} label={label} rules={rules} name={name}>
            <Input placeholder={placeholder} readOnly={readOnly ?? false} disabled={disabled ?? undefined} />
        </Form.Item>
    );
};

export const getInputNumberFormItem = (
    label: string,
    name: string,
    placeholder: string,
    className?: string,
    readOnly?: boolean,
    disabled?: boolean,
    rules?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item className={className ?? ''} label={label} rules={rules} name={name}>
            <InputNumber min={1} placeholder={placeholder} readOnly={readOnly ?? false} disabled={disabled ?? undefined} />
        </Form.Item>
    );
};

export const getTextAreaFormItem = (
    label: string,
    name: string,
    placeholder: string,
    rows: number = 4,
    className?: string,
    readOnly?: boolean,
    disabled?: boolean,
    rules?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item className={className ?? ''} label={label} rules={rules} name={name}>
            <TextArea placeholder={placeholder} readOnly={readOnly ?? false} disabled={disabled ?? undefined} rows={rows} />
        </Form.Item>
    );
};

export const getSelectFormItem = (
    label: string,
    name: string,
    placeholder: string,
    includeAll: boolean,
    options: any[],
    allowClear: boolean = false,
    minWidth: string = "180px",
    onChange?: any,
    className?: string,
    rules?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    const finalOptions = includeAll
        ? [{ label: "All", value: "" }, ...options]
        : options;
    return (
        <Form.Item className={className ?? ''} label={label} name={name} rules={rules}>
            <Select placeholder={placeholder} style={{ minWidth }} onChange={onChange} allowClear={allowClear}>
                {
                    finalOptions.map((x: any) => {
                        return <Select.Option value={x.val}>{x.label}</Select.Option>
                    }
                    )
                }
            </Select>
        </Form.Item>
    );
};

export const getRangePickerFormItem = (
    label: string,
    name: string,
    dateFormat: string,
    className?: string,
    disabledInput?: boolean,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item className={className ?? ''} label={label} name={name}>
            <RangePicker format={dateFormat} inputReadOnly={disabledInput ?? false} />
        </Form.Item>
    )
}

export const getDisplayFormItem = (
    label: string,
    name: any,
    className?: string,
    readOnly?: boolean,
    disabled?: boolean,
    addonAfter?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item labelAlign="right" className={className ?? ''} label={label} name={name}>
            <Input addonAfter={addonAfter ?? undefined} readOnly={readOnly ?? false} disabled={disabled ?? undefined} />
        </Form.Item>
    );
};

export const getTagsFormItem = (
    label: string,
    name: string,
    placeholder: string,
    includeAll: boolean,
    options: any[],
    minWidth: string = "180px",
    onChange?: any,
    className?: string,
    rules?: any,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    const finalOptions = includeAll
        ? [{ label: "All", value: "" }, ...options]
        : options;
    return (
        <Form.Item className={className ?? ''} label={label} name={name} rules={rules}>
            <Select mode="tags" placeholder={placeholder} style={{ minWidth }} onChange={onChange}>
                {
                    finalOptions.map((x: any) => {
                        return <Select.Option value={x.val}>{x.label}</Select.Option>
                    }
                    )
                }
            </Select>
        </Form.Item>
    );
};

export const getUploadFormItem = (
    formItemName: string,
    label: string,
    normFile: (e: any) => any, // Corrected the type for a function
    handlePreview: (e: any) => any, // Corrected the type for a function
    checkFileType: (e: any) => any, // Corrected the type for a file validation function
    initialImageUrls?: any,
    multiple?: boolean
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item getValueFromEvent={normFile} name={formItemName} label={label} valuePropName="fileList">
            <Upload name="image" action="" multiple={multiple || true} listType="picture" beforeUpload={checkFileType} onPreview={handlePreview} showUploadList={{ showRemoveIcon: false }}
                defaultFileList={
                    initialImageUrls && initialImageUrls.length > 0 ?
                        initialImageUrls.map((url: any, index: any) => ({
                            uid: `-${index + 1}`,
                            name: `image_${index + 1}`,
                            status: 'done',
                            url: url
                        }))
                        :
                        []
                }
            >
                <Button icon={<UploadOutlined />}>Click To Upload</Button>
            </Upload>
        </Form.Item>
    )
}

export const getLimitUploadFormItem = (
    formItemName: string,
    label: string,
    normFile: (e: any) => any, // Corrected the type for a function
    handlePreview: (e: any) => any, // Corrected the type for a function
    checkFileType: (e: any) => any, // Corrected the type for a file validation function
    initialImageUrl?: any
): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
    return (
        <Form.Item getValueFromEvent={normFile} name={formItemName} label={label} valuePropName="fileList">
            <Upload name="image" action="" listType="picture" maxCount={1} beforeUpload={checkFileType} onPreview={handlePreview} showUploadList={{ showRemoveIcon: false }}
                defaultFileList={
                    initialImageUrl && initialImageUrl.length > 0 ?
                        initialImageUrl.map((url: any, index: any) => ({
                            uid: `-${index + 1}`,
                            name: `image_${index + 1}`,
                            status: 'done',
                            url: url
                        }))
                        :
                        []
                }
            >
                <Button icon={<UploadOutlined />}>Click To Upload</Button>
            </Upload>
        </Form.Item>
    )
}