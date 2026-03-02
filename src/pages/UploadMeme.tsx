import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const UploadMeme = () => {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");

  const handleUpload = async () => {
    if (!image) return alert("Select an image");
    try {
      // 🔥 Cloudinary upload
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "memes_upload"); // preset name

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dg0jyfea8/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const imageUrl = data.secure_url;

      // 🔥 Firestore save
      await addDoc(collection(db, "memes"), {
        caption,
        imageUrl,
        userId: auth.currentUser?.uid,
        createdAt: new Date(),
      });

      alert("Meme uploaded 🎉");
      setCaption("");
      setImage(null);
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Meme</h2>
      <input
        type="file"
        onChange={(e) =>
          setImage(e.target.files ? e.target.files[0] : null)
        }
      />
      <input
        type="text"
        placeholder="Enter caption"
        className="block border p-2 my-3"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadMeme;