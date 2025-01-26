import { Button, Collapse, CollapseProps, Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../../hooks/layout/useNotification";
import { handleImagePreview } from "../../../shared/helpers/handle-image-preview.helper";
import PreviewImage from "../../../shared/PreviewImage";
import { getUploadFormItem } from "../../utils/FormItems";
import ProductInfoEdit from "./ProductInfo-edit";

const EditProduct = () => {
  const navigate = useNavigate();
  const pageTitle = "Edit Product";
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm();
  const [prdDetails, setPrdDetails] = useState<any>();
  const [prdCategory, setPrdCategory] = useState<any>();
  const [prdTags, setPrdTags] = useState<any>();
  const [prdSizes, setPrdSizes] = useState<any>();
  const [prdFinishes, setPrdFinishes] = useState<any>();
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
        <ProductInfoEdit
          form={form}
          data={prdDetails}
          categoryData={prdCategory}
          tagsData={prdTags}
          sizesData={prdSizes}
          finishesData={prdFinishes}
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
    fetch(`${import.meta.env.VITE_API_KEY}/product-details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let arrImages: any = [];
        let arrMockedImages: any = [];
        if (data.images.length !== 0) {
          data.images.map((url: any, index: any) =>
            arrImages.push({
              uid: `-${index + 1}`,
              name: `image_${index + 1}_${Date.now()}`,
              status: "done",
              url: url,
            })
          );
        }
        if (data.mockedImages.length !== 0) {
          data.mockedImages.map((url: any, index: any) =>
            arrMockedImages.push({
              uid: `-${index + 1}`,
              name: `image_${index + 1}_${Date.now()}`,
              status: "done",
              url: url,
            })
          );
        }

        form.setFieldsValue({
          images: arrImages,
          mockedImages: arrMockedImages,
        });
        setPrdDetails(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const uploadProductImage = async (arr: any) => {
    for (const item of arr) {
      const formData = new FormData();
      formData.append("image", item.originFileObj); // 'image' is the field name expected by the server

      fetch(`${import.meta.env.VITE_API_KEY}/upload-products-images/${id}`, {
        method: "POST",
        body: formData, // Sending the image data
      })
        .then(async (response) => {
          if (response.status === 201) {
            setSuccessNotification("Upload Product Images Successful!");
            navigate("/product-listing");
          }
        })
        .catch((error) => {
          console.log("Upload Product Images error:", error);
          setErrorNotification(
            "Upload Product Images Failed. Please try again later."
          );
        });
    }
  };

  const uploadMockImage = async (arr: any) => {
    for (const item of arr) {
      const formData = new FormData();
      formData.append("image", item.originFileObj); // 'image' is the field name expected by the server

      fetch(`${import.meta.env.VITE_API_KEY}/upload-mocked-images/${id}`, {
        method: "POST",
        body: formData, // Sending the image data
      })
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
    }
  };

  const submitForm = () => {
    const formValue = form.getFieldsValue();
    if (
      formValue.images === undefined ||
      (formValue.images && formValue.images.length === 0)
    ) {
      return setErrorNotification("Please ensure that image is uploaded.");
    }

    if (
      formValue.mockedImages === undefined ||
      (formValue.mockedImages && formValue.mockedImages.length === 0)
    ) {
      return setErrorNotification(
        "Please ensure that Mocked Image is uploaded."
      );
    }
    if (formValue.mockedImages.length > 3) {
      return setErrorNotification(
        "Mocked Images only allow to upload 3(three) images."
      );
    }

    let notDeletedImages: any = [];
    let uploadPrdImages: any = [];
    let uploadMockImages: any = [];
    for (const item of formValue.images) {
      if (item.status === "done") {
        notDeletedImages.push(item.url);
      } else {
        uploadPrdImages.push(item);
      }
    }

    for (const item of formValue.mockedImages) {
      if (item.status === "done") {
        notDeletedImages.push(item.url);
      } else {
        uploadMockImages.push(item);
      }
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
      notDeletedImageUrls: notDeletedImages,
    };

    fetch(`${import.meta.env.VITE_API_KEY}/update-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dataBody,
        id: id,
      }),
    })
      .then(async (response) => {
        if (response.status === 204) {
          setSuccessNotification("Update Successful!");
          if (uploadPrdImages.length !== 0) {
            uploadProductImage(uploadPrdImages);
          }
          if (uploadMockImages.length !== 0) {
            uploadMockImage(uploadMockImages);
          }
          if (uploadPrdImages.length === 0 && uploadMockImages.length === 0) {
            navigate("/product-listing");
          }
        }
      })
      .catch((error) => {
        console.log("Update Product error:", error);
        setErrorNotification("Update Failed. Please try again later.");
      });
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>{pageTitle}</h2>
        <br />
      </div>
      <Collapse
        style={{ textAlign: "left" }}
        items={items}
        defaultActiveKey={["1", "2", "3"]}
        // activeKey={["1", "2", "3"]}
        onChange={onChange}
      />
      ;
      <div className="form-action-button-container">
        <Button type="primary" className="form-button" onClick={submitForm}>
          Save
        </Button>
        <Button
          className="form-button"
          onClick={() => navigate("/product-listing")}
        >
          Cancel
        </Button>
      </div>
      <PreviewImage displayImg={displayImg} setDisplayImg={setDisplayImg} />
    </>
  );
};

export default EditProduct;
