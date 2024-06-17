import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function AddListing() {
  const [listingData, setListingData] = useState({
    name: '',
    description: '',
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    price: '',
    images: [],
    imageDescriptors: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setListingData(prevData => ({
        ...prevData,
        images: [...prevData.images, reader.result]
      }));
    };
  };

  const handleAddDescriptor = () => {
    setListingData(prevData => ({
      ...prevData,
      imageDescriptors: [...prevData.imageDescriptors, ''],
      images: [...prevData.images, '']
    }));
  };

  const handleDescriptorChange = (index, value) => {
    const updatedDescriptors = [...listingData.imageDescriptors];
    updatedDescriptors[index] = value;
    setListingData(prevData => ({
      ...prevData,
      imageDescriptors: updatedDescriptors
    }));
  };

  const handleFinish = () => {
    // Perform any necessary actions before displaying the prompt
    window.alert("Listing created!");
  };

  return (
    <div className="flex flex-col pb-3 bg-white max-w-[480px]">
      <div className="flex flex-col w-full bg-white shadow-sm">
        <div className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
            className="w-6 aspect-square"
          />
          <Link to="/AgentProfile" className="grow">
            Agent Profile
          </Link>
        </div>
      </div>

      <form className="mt-7">
        <input
          type="text"
          name="name"
          value={listingData.name}
          onChange={handleChange}
          placeholder="Name of listing"
          className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
        />

        <input
          type="text"
          name="addressLine1"
          value={listingData.addressLine1}
          onChange={handleChange}
          placeholder="Address line 1"
          className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
        />

        <input
          type="text"
          name="addressLine2"
          value={listingData.addressLine2}
          onChange={handleChange}
          placeholder="Address line 2"
          className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
        />

        <input
          type="text"
          name="postcode"
          value={listingData.postcode}
          onChange={handleChange}
          placeholder="Postcode"
          className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
        />
        <MapContainer center={[55.48652833128924, -4.611751651379961]} zoom={13}
                      style={{height: '400px', border: '2px solid black', borderRadius: '50px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[55.48652833128924, -4.611751651379961]}>
            <Popup>
              Where we're based!
            </Popup>
          </Marker>
        </MapContainer>

        <input
          type="text"
          name="price"
          value={listingData.price}
          onChange={handleChange}
          placeholder="Price"
          className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
        />

        <button
          type="button"
          onClick={handleAddDescriptor}
          className="justify-center items-center self-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg"
        >
          Add another descriptor
        </button>

        {listingData.imageDescriptors.map((descriptor, index) => (
          <div key={index}>
            <input
              type="text"
              value={descriptor}
              onChange={(e) => handleDescriptorChange(index, e.target.value)}
              placeholder={`Image ${index + 1} Description`}
              className="justify-center self-center py-1 px-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[480px] text-black text-opacity-50"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id={`image-upload-${index}`}
            />
            <label htmlFor={`image-upload-${index}`} className="cursor-pointer">
              Click to add an image
            </label>
            {listingData.images[index] && (
              <img
                src={listingData.images[index]}
                alt={`Image ${index + 1}`}
                className="w-20"
              />
            )}
          </div>
        ))}

        <Link
          to="/"
          className="justify-center items-center self-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg block text-center"
          onClick={handleFinish}
        >
          Finish
        </Link>
      </form>

      <div className="flex gap-0 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
        <Link to="/" className="flex flex-col bg-gray-200 flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🏠</div>
          <div className="text-xs text-ellipsis">Home</div>
        </Link>
        <Link to="/UserProfile" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">👤</div>
          <div className="text-xs text-ellipsis">My profile</div>
        </Link>
        <Link to="/AgentSearch" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🧑‍💼</div>
          <div className="text-xs text-ellipsis">Our agents</div>
        </Link>
        <Link to="/CA" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">📞</div>
          <div className="text-xs text-ellipsis">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default AddListing;