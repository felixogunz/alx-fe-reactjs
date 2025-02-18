import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: 'blue' }}>
      <h2 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '5px' }}>{props.name}</h2>
      <p style={{ marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
