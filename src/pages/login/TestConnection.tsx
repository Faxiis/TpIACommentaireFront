import React from 'react';

const TestConnection: React.FC = () => {
    const testConnection = async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'camarche',
                    password: 'ehouiouioui',
                }),
            });
            console.log('Response Status:', response.status); // HTTP Status
            console.log('Response Body:', await response.text()); // Raw response body
            if (response.ok) {
                alert('Connexion réussie !');
            } else {
                alert('Erreur lors de la connexion');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erreur lors de la connexion: ' + error.message);
        }
    };

    return (
        <div>
            <button onClick={testConnection}>Tester la connexion</button>
        </div>
    );
};

export default TestConnection;