import { useState } from "react";
import { db, storage } from "../firebaseConfig"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    information: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  const uploadFile = async (file: File) => {
    const storageRef = ref(storage, `files/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let fileURL = null;
      if (formData.file) {
        fileURL = await uploadFile(formData.file);
      }

      const docRef = await addDoc(collection(db, "contacts"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        information: formData.information,
        file: fileURL,
      });

      console.log("Document written with ID: ", docRef.id);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        information: "",
        file: null,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2
          className="text-3xl font-bold text-center mb-6 text-black"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Vraag hier uw offerte aan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Voornaam
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Voornaam"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Achternaam
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Achternaam"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefoonnummer *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Telefoonnummer *"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Informatie
            </label>
            <textarea
              name="information"
              value={formData.information}
              onChange={handleChange}
              placeholder="Informatie"
              className="border border-gray-300 p-3 rounded w-full"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bestanden toevoegen
            </label>
            <div className="border border-gray-300 p-6 rounded text-center relative">
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 104 4H7a4 4 0 01-4-4zm13-3V7a4 4 0 00-4-4 4 4 0 00-4 4v5m8 0H7m8 0a2 2 0 11-4 0m-4 0h8"
                />
              </svg>
            </div>
          </div>
          <label className="flex items-start space-x-2 text-sm text-gray-700">
            <input type="checkbox" className="h-4 w-4" />
            <span>
              Ik ga akkoord met de voorwaarden die zijn verstrekt door het
              bedrijf. Door mijn telefoonnummer op te geven, stem ik in met het
              ontvangen van sms-berichten van de onderneming.
            </span>
          </label>
          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-3 px-4 rounded w-full"
          >
            Versturen
          </button>
        </form>
      </div>
    </div>
  );
}
