import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Radhikacrypto')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-10">Error: {error.message}</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-900 text-white">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
                <img
                    className="rounded-full border-4 border-gray-700 mb-4"
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                    width="300px"
                    height="3000px"
                />
                <div className="text-lg font-semibold">
                    <p className="mb-2">GITHUB FOLLOWERS: <span className="text-orange-500">{data.followers}</span></p>
                    <p className="mb-2">CREATED AT: <span className="text-gray-400">{new Date(data.created_at).toLocaleDateString()}</span></p>
                    <p>LAST UPDATE: <span className="text-gray-400">{new Date(data.updated_at).toLocaleDateString()}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Github;
