import React, { useState, useEffect } from "react";
import axios from "axios";
import { notification, Table, Modal, Button, Input, DatePicker } from "antd";
import moment from "moment";

import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";


const report = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    uploadedBy: "",
    media: null,
     uploadedByDoctor: "",
    uploadedOfPatient: "",
  });

  const [loading, setLoading] = useState(false);
  const [api] = notification.useNotification();
  const [reports, setReports] = useState([]);
  console.log(reports)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
const userEmail=localStorage.getItem("userEmail")
const userId=localStorage.getItem("userId")
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const base64 = await toBase64(file);
    const fullBase64 = `data:${file.type};base64,${base64.split(",")[1]}`;
    setFormData((prev) => ({ ...prev, media: fullBase64 }));
  };const email = localStorage.getItem("userEmail")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, dateString) => {
    setFormData((prev) => ({ ...prev, date: dateString }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        _id:userId,
        title: formData.title,
        description: formData.description,
        date: formData.date,
        uploadedOfPatient: formData.uploadedBy,
        image: formData.media,
        uploadedOfPatient:userEmail
      };

      const response = await axios.post("http://localhost:5001/api/auth/report", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        api.success({
          message: "Success",
          description: response.data.message,
        });
        setFormData({ title: "", description: "", date: "", uploadedBy: "", media: null });
        fetchReports();
      } else {
        api.error({
          message: "Failed",
          description: response.data.message,
        });
      }
    } catch (err) {
      console.error(err);
      api.error({
        message: "Error",
        description: "An error occurred while submitting the report.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchReports = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/auth/getSingleReportsPatient`,
        {
          params: { email:userEmail }, // Send the email as a query parameter
        }
      );
      setReports(res.data.reports || []);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => moment(text).format("YYYY-MM-DD"),
    },
  { title: "Uploaded Of Patient", dataIndex: "uploadedOfPatient", key: "uploadedOfPatient" },
    { title: "Uploaded By Doctor", dataIndex: "uploadedByDoctor", key: "uploadedByDoctor" },    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedReport(record);
            setIsModalVisible(true);
          }}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <>
    <Navbar/>
   
    <div className="report-form-container" style={{ padding: "2rem" }}>
      <h2>Upload Medical Report (PDF)</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Report Title"
          required
          style={{ marginBottom: "1rem" }}
        />
        <Input.TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          rows={4}
          style={{ marginBottom: "1rem" }}
        />
        <DatePicker
          onChange={handleDateChange}
          style={{ marginBottom: "1rem", width: "100%" }}
          placeholder="Select Date"
        />
        <Input
          type="text"
          name="uploadedBy"
          value={email}
          disabled
          onChange={handleChange}
          placeholder="Uploaded By (email or ID)"
          required
          style={{ marginBottom: "1rem" }}
        />
        <Input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          required
          style={{ marginBottom: "1rem" }}
        />
        <Button type="primary" htmlType="submit" loading={loading}>
          {loading ? "Uploading..." : "Submit Report"}
        </Button>
      </form>

      <h3>dsds</h3>
      <Table columns={columns} dataSource={reports} rowKey="_id" />

      <Modal
        title={selectedReport?.title || "View Report"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        {selectedReport?.image ? (
          <iframe
            src={selectedReport.image}
            width="100%"
            height="600px"
            title="PDF Viewer"
            style={{ border: "none" }}
          />
        ) : (
          <p>No report available.</p>
        )}
      </Modal>
    </div>
    <Footer/>
    </>
  );
};

export default report;





