import { Button, Card, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { getInputFormItem, getSelectFormItem } from "../../utils/FormItems";

const EditTag = () => {
    const pageTitle = 'Edit Tag'
    const [form] = Form.useForm();
    const { id } = useParams<{ id: string }>();
    const [mainTag, setMainTag] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const navigate = useNavigate();

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
                    setMainTag(array);
                }
                );
        } catch (error) {
            console.error("Error fetching Main Tags:", error);
        }
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/tag-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                form.setFieldsValue({
                    'name': data.name,
                    'value': data.value,
                    'mainTagId': data.mainTagId
                })
            }
            );
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/update-tag`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formValue,
                id: id
            }),
        })
            .then((response) => {
                if (response.status === 204) {
                    setSuccessNotification('Update Successful!')
                    navigate('/product-tags');
                }
            }
            )
            .catch((error) => {
                console.log('Update Product Tags error:', error);
                setErrorNotification('Update Failed. Please try again later.');
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
                                mainTag && mainTag.length > 0 &&
                                getSelectFormItem('Main Category', 'mainCategoryId', 'Please select a Main Tag.', false, mainTag)
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

export default EditTag