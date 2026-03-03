import { useState } from "react";

const UploadMeme = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Upload function
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }
    try {
      setLoading(true);

      // Prepare form data
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "memes_upload"); // unsigned preset

      // Cloudinary API call
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dg0jyfea8/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Image URL:", data.secure_url);

      if (data.secure_url) {
        alert("Image uploaded successfully 🎉");
      } else {
        alert("Upload failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Upload Meme</h2>

      {/* Image select */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <br /><br />

      {/* Upload button */}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadMeme;