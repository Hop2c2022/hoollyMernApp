import BUTTON from './BUTTON';
import { useState } from 'react';

const CreateFood = () => {
  const [foodname, setFoodname] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append('file', file);
    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json().then())
      .then((result) => {
        console.log('success', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(formData);
  }

  return (
    <div className="flex items-center justify-center bg-[#111] h-[100vh] w-[100vw]">
      <div className="flex flex-col informationpart">
        <input placeholder="name ?" onChange={(e) => setFoodname(e.target.value)}></input>
        <input placeholder="desc ?" onChange={(e) => setDescription(e.target.value)}></input>
        <input placeholder="price?" onChange={(e) => setPrice(e.target.value)}></input>
        <BUTTON />
      </div>
      <form onSubmit={handleUpload} className="fileupload">
        <input type="file" name="file" onChange={handleFile}></input>
        {/* <button>Upload</button> */}
      </form>
    </div>
  );
};

export default CreateFood;
