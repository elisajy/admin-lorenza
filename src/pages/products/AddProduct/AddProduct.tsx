import { Button, Collapse, CollapseProps, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import PreviewImage from "../../../shared/PreviewImage";
import { getUploadFormItem } from "../../utils/FormItems";
import ProductInfoAdd from "./ProductInfo-add";

const AddProduct = () => {
  const navigate = useNavigate();
  const pageTitle = "New Product";
  const [form] = Form.useForm();
  const [prdCategory, setPrdCategory] = useState<any>();
  const [prdTags, setPrdTags] = useState<any>();
  const [prdSizes, setPrdSizes] = useState<any>();
  const [prdFinishes, setPrdFinishes] = useState<any>();
  const [prdColors, setPrdColors] = useState<any>();
  const { setSuccessNotification, setErrorNotification } = useNotification();
  const [productImage, setProductImage] = useState<any>();
  const [mockedImage, setMockedImage] = useState<any>();
  const [displayImg, setDisplayImg] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  const checkFileType = (e: any) => {
    if (e.type === "image/jpeg" || e.type === "image/png") {
      if (e.size > 1000000) {
        setErrorNotification(
          "Image file size is more than 1MB. Please try a smaller size file."
        );
        return Upload.LIST_IGNORE;
      }
      return false;
    }
    setErrorNotification(
      "Only .jpg, .jpeg and .png image file format are accepted!"
    );
    return Upload.LIST_IGNORE;
  };

  //upload file
  const normPIFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setProductImage(e.file);
    return e && e.fileList;
  };

  const normMIFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setMockedImage(e.file);
    return e && e.fileList;
  };

  // Display image preview
  const handlePreview = async (file: any) => {
    file = await handleImagePreview(file);
    setDisplayImg({
      previewVisible: true,
      previewImage: file.url || file.preview,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Basic Information",
      children: (
        <ProductInfoAdd
          form={form}
          categoryData={prdCategory}
          tagsData={prdTags}
          sizesData={prdSizes}
          finishesData={prdFinishes}
          colorsData={prdColors}
        />
      ),
    },
    {
      key: "2",
      label: "Product Images",
      children: (
        <div className="form-container">
          <div className="form-wrap">
            <Form layout="vertical" form={form} className="form-box">
              {getUploadFormItem(
                "images",
                "Product Image",
                normPIFile,
                handlePreview,
                checkFileType,
                true
              )}
            </Form>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Mock Images",
      children: (
        <div className="form-container">
          <div className="form-wrap">
            <Form layout="vertical" form={form} className="form-box">
              {getUploadFormItem(
                "mockedImages",
                "Mocked Image",
                normMIFile,
                handlePreview,
                checkFileType,
                true
              )}
            </Form>
          </div>
        </div>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}/all-categories-no-level`)
      .then((response) => response.json())
      .then((data) => {
        let array: { val: any; label: any }[] = [];
        data.map((x: any) => {
          array.push({ val: x.id, label: x.name });
        });
        setPrdCategory(array);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}/all-tags-no-level`)
      .then((response) => response.json())
      .then((data) => {
        let array: { val: any; label: any }[] = [];
        data.map((x: any) => {
          array.push({ val: x.id, label: x.name });
        });
        setPrdTags(array);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}/all-sizes`)
      .then((response) => response.json())
      .then((data) => {
        let array: { val: any; label: any; id: any }[] = [];
        data.map((x: any) => {
          array.push({ val: x.id, label: x.name, id: x.id });
        });
        setPrdSizes(array);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}/all-finishes`)
      .then((response) => response.json())
      .then((data) => {
        let array: { val: any; label: any; id: any }[] = [];
        data.map((x: any) => {
          array.push({ val: x.id, label: x.name, id: x.id });
        });
        setPrdFinishes(array);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}/all-colors`)
      .then((response) => response.json())
      .then((data) => {
        let array: { val: any; label: any; id: any }[] = [];
        data.map((x: any) => {
          array.push({ val: x.id, label: x.name, id: x.id });
        });
        setPrdColors(array);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadProductImage = async (arr: any, responseId: any) => {
    const formData = new FormData();
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      formData.append(`image-${index}`, element.originFileObj); // 'image' is the field name expected by the server
    }

    fetch(
      `${import.meta.env.VITE_API_KEY}/upload-products-images/${responseId}`,
      {
        method: "POST",
        body: formData, // Sending the image data
      }
    )
      .then(async (response) => {
        if (response.status === 201) {
          //mock images
          const formValue = form.getFieldsValue();
          if (formValue.mockedImages && formValue.mockedImages.length !== 0) {
            await uploadMockImage(formValue.mockedImages, responseId);
          } else {
            setSuccessNotification("Upload Product Images Successful!");
            navigate("/product-listing");
          }
        }
      })
      .catch((error) => {
        console.log("Upload Product Images error:", error);
        setErrorNotification(
          "Upload Product Images Failed. Please try again later."
        );
      });
  };

  const uploadMockImage = async (arr: any, responseId: any) => {
    const formData = new FormData();
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      formData.append(`image-${index}`, element.originFileObj); // 'image' is the field name expected by the server
    }

    fetch(
      `${import.meta.env.VITE_API_KEY}/upload-mocked-images/${responseId}`,
      {
        method: "POST",
        body: formData, // Sending the image data
      }
    )
      .then(async (response) => {
        if (response.status === 201) {
          setSuccessNotification("Upload Mocked Images Successful!");
          navigate("/product-listing");
        }
      })
      .catch((error) => {
        console.log("Upload Mocked Images error:", error);
        setErrorNotification(
          "Upload Mocked Images Failed. Please try again later."
        );
      });
  };

  const submitForm = () => {
    const formValue = form.getFieldsValue();
    if (
      formValue.images === undefined ||
      (formValue.images && formValue.images.length === 0)
    ) {
      return setErrorNotification("Please ensure that image is uploaded.");
    }

    if (formValue.mockedImages && formValue.mockedImages.length > 3) {
      return setErrorNotification(
        "Mocked Images only allow to upload 3(three) images."
      );
    }

    const dataBody = {
      name: formValue.prdName,
      code: formValue.prdCode,
      description: formValue.prdDesc,
      variation: formValue.prdVariation,
      thickness: formValue.prdThickness,
      color: formValue.prdColor,
      tags: formValue.prdTag,
      categories: formValue.prdCategory,
      size: formValue.prdSize,
      finish: formValue.prdFinish,
      sequence: formValue.sequence,
      colorId: formValue.prdColorId,
    };
    fetch(`${import.meta.env.VITE_API_KEY}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    })
      .then(async (response) => {
        if (response.status === 201) {
          setSuccessNotification("Insert Successful!");
          const data = await response.json();
          uploadProductImage(formValue.images, data.id);
          // uploadMockImage(formValue.mockedImages, data.id);
        }

        if (response.status === 409) {
          setErrorNotification("Duplicated records. Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Insert Inspiration error:", error);
        setErrorNotification("Insert Failed. Please try again later.");
      });
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>Add New Product</h2>
        <br />
      </div>
      <Collapse
        style={{ textAlign: "left" }}
        items={items}
        defaultActiveKey={["1", "2", "3"]}
        onChange={onChange}
      />
      ;
      <div className="form-action-button-container">
        <Button type="primary" className="form-button" onClick={submitForm}>
          Save
        </Button>
        <Button
          className="form-button"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </div>
      <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
    </>
  );
};

export default AddProduct;
