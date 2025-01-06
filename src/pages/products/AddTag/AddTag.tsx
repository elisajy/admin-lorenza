import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { getInputFormItem, getSelectFormItem } from "../../utils/FormItems";

const AddTag = () => {
    const pageTitle = 'New Tag'
    const [form] = Form.useForm();
    const [mainTags, setMainTags] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const navigate = useNavigate();
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    useEffect(() => {
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-tags`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.id, label: x.name }
                        )
                    })
                    setMainTags(array);
                }
                );
        } catch (error) {
            console.error("Error fetching Main Tags:", error);
        }
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/add-tag`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccessNotification('Insert Successful!')
                    navigate('/product-tags');
                }
            }
            )
            .catch((error) => {
                console.log('Insert Product Tag error:', error);
                setErrorNotification('Insert Failed. Please try again later.');
            });
    };


    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Tag Info" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Tag Name', "name", 'Please fill in the Tag Name.')}
                            {getInputFormItem('Tag Value', "value", 'Please fill in the Tag Value.')}
                            {
                                mainTags && mainTags.length > 0 &&
                                getSelectFormItem('Main Tag', 'mainTagId', 'Please select a Main Tag.', false, mainTags)
                            }
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/product-tags')}>Cancel</Button>
            </div>
        </>
    )
}

export default AddTag