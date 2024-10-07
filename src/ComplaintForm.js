// ComplaintForm.js
import React, { useState } from 'react';

const ComplaintForm = ({title, depart}) => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    
    console.log(title,depart);


    const handleSubmit = async (e) => {
        e.preventDefault();

        
        //debugger;
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        
        const response = await fetch('http://localhost:3000/api/complaint', {
            method: 'POST',
            body: formData,
        });

        alert('hello');
        console.log(response);
        const result = await response.json();

        if (result.success) {
            //window.location.href = '/success';  // Redirect to success page
        } else {
            //alert('here');
            setError(result.message);
        }
    };

    return (
        <div>
            <h2>Submit Complaint</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email (required): </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Complaint Description (required): </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload Image (optional): </label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/*"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ComplaintForm;
