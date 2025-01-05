import { Button, Card, Form } from "antd";
import { getInputFormItem, getSelectFormItem } from "../../utils/FormItems";
import { categoryData } from "../dummyProduct";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { useEffect, useState } from "react";

const EditCategory = () => {
    const pageTitle = 'Category Name'
    const [form] = Form.useForm();
    const { id } = useParams<{ id: string }>();
    const [mainCategoryData, setMainCategoryData] = useState<any>();
    const { setSuccessNotification, setErrorNotification } = useNotification();
    const navigate = useNavigate();
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    useEffect(() => {
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-categories`)
                .then((response) => response.json())
                .then((data) => {
                    let array: { val: any; label: any; }[] = [];
                    data.map((x: any) => {
                        array.push(
                            { val: x.id, label: x.name }
                        )
                    })
                    setMainCategoryData(array);
                }
                );
        } catch (error) {
            console.error("Error fetching Main Categories:", error);
        }
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_KEY}/category-details/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                form.setFieldsValue({
                    'name': data.name,
                    'description': data.description,
                    'mainCategoryId': data.mainCategoryId
                })
            }
            );
    }, []);

    const submitForm = () => {
        const formValue = form.getFieldsValue();
        fetch(`${import.meta.env.VITE_API_KEY}/update-category`, {
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
                    navigate('/product-categories');
                }
            }
            )
            .catch((error) => {
                console.log('Update Product Categories error:', error);
                setErrorNotification('Update Failed. Please try again later.');
            });
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <h2>{pageTitle}</h2>
                <br />
            </div>
            <Card title="Category Info" className="form-card-container">
                <div className="form-container">
                    <div className="form-wrap">
                        <Form
                            layout='vertical'
                            form={form}
                            className="form-box"
                        >
                            {getInputFormItem('Category Name', "name", 'Please fill in the Category Name.')}
                            {getInputFormItem('Category Description', "description", 'Please fill in the Category Description.')}
                            {
                                mainCategoryData && mainCategoryData.length > 0 &&
                                getSelectFormItem('Main Category', 'mainCategoryId', 'Please select a Main Category.', false, mainCategoryData)}
                        </Form>
                    </div>
                </div>
            </Card>
            <div className="form-action-button-container">
                <Button type="primary" className='form-button' onClick={submitForm}>Save</Button>
                <Button className='form-button' onClick={() => navigate('/product-categories')}>Cancel</Button>
            </div>
        </>
    )
}

export default EditCategory