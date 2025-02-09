import { Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyInfo = () => {
    const navigate = useNavigate();
    const [companyInfo, setCompanyInfo] = useState<any>();

    const navAction = (type: any, record?: any) => {
        if (type === 'edit') {
            navigate(`/company-info/edit/${record.key}`)
        }
    }

    useEffect(() => {
        fetchCompanyInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getKeyName = (key: string) => {
        switch (key) {
            case 'COMPANY_NAME':
                return 'Company Name';
            case 'COMPANY_REGISTRATION_NUMBER':
                return 'Company Registration Number';
            case 'ADDRESS':
                return 'Address';
            case 'OPERATING_HOURS':
                return 'Operating Hours';
            case 'CONTACT_DESKTOP':
                return 'Contact Desktop View';
            case 'CONTACT_MOBILE':
                return 'Contact Mobile View';
            case 'FACEBOOK':
                return 'Facebook Link';
            case 'INSTAGRAM':
                return 'Instagram Link';
            case 'OUR_STORY_TEXT':
                return 'Our Story - Text';
            case 'OUR_STORY_IMG':
                return 'Our Story - Image';
            default:
                return null;
        }
    }

    const fetchCompanyInfo = () => {
        try {
            fetch(`${import.meta.env.VITE_API_KEY}/all-company-info`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
                cache: 'no-store'  // Ensures the response isn't cached
            })
                .then((response) => response.json())
                .then((data) => {
                    const updatedData = data.length > 0 ?
                        data.map((x: any) => {
                            return { ...x, title: getKeyName(x.key) }
                        }) : [];
                    setCompanyInfo([...updatedData]);
                }
                );
        } catch (error) {
            console.error("Error fetching Inspiration:", error);
        }
    };

    return (
        <>
            <div className='form-button-container'>
                <div>
                    <h2>Company Information</h2>
                </div>
            </div>
            <div>
                <Table dataSource={companyInfo}>
                    <Column title="Title" dataIndex="title" key="name" />
                    <Column title="Value" dataIndex="value" key="value" />
                    <Column title="Updated At" dataIndex="updatedAt" key="updatedAt" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: any) => (
                            <Space size="middle">
                                <a onClick={() => navAction('edit', record)}>Edit</a>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </>
    )

}

export default CompanyInfo